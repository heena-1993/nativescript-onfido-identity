import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { OnfidoIdentityRoot } from './onfido-identity.common';
declare var OnfidoConfig;
export class OnfidoIdentity extends OnfidoIdentityRoot {
    private _config;
    private  _oClient;
    constructor(settings: any) {
        super(settings);
        this._settings = settings;
    }
    setup() {
        return new Promise((resolve, reject) => { 
            this._config = new OnfidoConfig.Builder()
            this._config.withSDKToken(this._settings.token);
        });
    }
}

export class OnfidoLayout extends StackLayout {
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