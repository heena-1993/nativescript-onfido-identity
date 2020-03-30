import { Application } from "@nativescript/core";
import { AndroidApplication } from "@nativescript/core/application";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { OnfidoIdentityRoot } from "./onfido-identity.common";
let ctx: android.content.Context = Application.android.context;
let foregroundActivity: android.app.Activity =
  Application.android.foregroundActivity;
declare var com;
var Onfido = com.onfido.android.sdk.capture.Onfido;
const OnfidoConfig = com.onfido.android.sdk.capture.OnfidoConfig;
const OnfidoFactory = com.onfido.android.sdk.capture.OnfidoFactory;
export class OnfidoIdentity extends OnfidoIdentityRoot {
  private client;
  onfidoResult = {
    userCanceled: null,
    results: null,
    error: null
  };
  private onActivityResultCallback;
  constructor(settings: any) {
    super(settings);
    this.client = OnfidoFactory.create(ctx).getClient();
    this._settings = settings;
  }
  setup() {
    return new Promise((resolve, reject) => {
      this.startFlow(resolve, reject);
    });
  }
  startFlow(resolve, reject) {
    var onfidoConfig = OnfidoConfig.builder(foregroundActivity)
      .withSDKToken(this._settings.token)
      .build();

    this.client.startActivityForResult(foregroundActivity, 1, onfidoConfig);
    this.onActivityResultCallback = args => this.onActivityResult(args);
    Application.android.on(
      AndroidApplication.activityResultEvent,
      this.onActivityResultCallback
    );
  }

  onActivityResult(args) {
    const self = this;
    this.client.handleActivityResult(
      args.resultCode,
      args.intent,
      new Onfido.OnfidoResultListener({
        userExited(exitCode) {
          self.responseReceived({ userExited: exitCode });
        },
        userCompleted(captures) {
          self.responseReceived({ userCompleted: captures });
        },
        onError(e) {
          self.responseReceived({ onError: e });
        }
      })
    );
  }

  responseReceived(response) {
    if (response.userExited) {
      this.onfidoResult.userCanceled = response.userExited;
    }
    if (response.userCompleted) {
      this.onfidoResult.results = response.userCompleted;
    }
    if (response.onError) {
      this.onfidoResult.error = response.onError;
    }
    this._settings.responseHandler(this.onfidoResult);

    Application.android.off(
      AndroidApplication.activityResultEvent,
      this.onActivityResultCallback
    );
  }
}

export class OnfidoLayout extends StackLayout {
  public set settings(settings: any) {
    new OnfidoIdentity(settings)
      .setup()
      .then(onfido => {
        setTimeout(() => {
          console.log(onfido);
        }, 10);
      })
      .catch((error: string) => {
        console.log(`[nativescript-onfido]: ERROR: ${error}`);
      });
  }
}
