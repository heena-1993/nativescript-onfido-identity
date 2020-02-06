import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { OnfidoIdentityRoot } from './onfido-identity.common';
declare var ONFlowConfig: any;
declare var ONFlow: any;
class OnfidoIdentity extends OnfidoIdentityRoot {
    private _config: any;
    private _configBuilder: any;
    private _configError = new interop.Reference();
    private _runError: any = new interop.Reference();
    private _onFlow: any;
    private _onfidoController: any;
    constructor(settings: any) {
        super(settings);
        this._settings = settings;
    }
    setup() {
        return new Promise((resolve, reject) => {
            this._configBuilder = ONFlowConfig.builder();
            this._configBuilder.withSdkToken(this._settings.token);
            if(this._settings.welcome) {
                this._configBuilder.withWelcomeStep();
            } 
            this._configBuilder.withDocumentStep();
            if(this._settings.photo) {
                // configure to add photo step
            }
            if(this._settings.video) {
                // configure to add video step
            }
            this._config = this._configBuilder.buildAndReturnError(this._configError);
            if (this._configError.value === null) {
                this._onFlow = ONFlow.alloc().initWithFlowConfiguration(this._config);
                this._onFlow.withResponseHandler(this._settings.responseHandler);
                this._onfidoController = this._onFlow.runAndReturnError(this._runError);
                if (this._runError.value == null) {
                    resolve(this._onfidoController);
                } else {
                    reject(this._runError.value);
                }
            } else {
                reject(this._configError.value);
            }
        });
    }
}

export class Onfido extends StackLayout {
    public set settings(settings: any) {
        new OnfidoIdentity(settings)
            .setup()
            .then((onfido: UIViewController) => {
                setTimeout(() => {
                    this.rootVC().presentViewControllerAnimatedCompletion(onfido, true, null);
                }, 10);
            }).catch((error: string) => {
                console.log(`[nativescript-onfido]: ERROR: ${error}`);
            });
    }

    rootVC() {
        let appWindow = UIApplication.sharedApplication.keyWindow;
        return appWindow.rootViewController;
    }
}