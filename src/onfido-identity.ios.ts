import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { OnfidoIdentityRoot } from './onfido-identity.common';

class OnfidoIdentity extends OnfidoIdentityRoot {
    private _config: any;
    private _configBuilder: any;
    private _configError = new interop.Reference();
    private _runError: any = new interop.Reference();

    private _faceVariantBuilder: any;
    private _faceVariantError = new interop.Reference();

    private _documentVariantBuilder: any;
    private _documentVariantError = new interop.Reference();

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
            // this._configBuilder.withAppearance(ONAppearance.alloc().initWithSupportDarkMode(true));
            
            if (this._settings.welcome) {
                this._configBuilder.withWelcomeStep();
            }
             if (this._settings.document) {
                this._configBuilder.withDocumentStep();
            }
            /* if (this._settings.documentTypeOf) {
                this._documentVariantBuilder = ONDocumentTypeVariantConfig.builder();
                this._documentVariantBuilder.withDrivingLicence();
                const _documentStepVariant = this._documentVariantBuilder.buildAndReturnError(this._documentVariantError);
                this._configBuilder.withDocumentStepOfType(_documentStepVariant).andCountryCode('GBR');
            } */
            if (this._settings.photo) {
                this._faceVariantBuilder = ONFaceStepVariantConfig.builder();
                this._faceVariantBuilder.withPhotoCaptureWithConfig(null);
                this._configBuilder.withFaceStepOfVariant(this._faceVariantBuilder.buildAndReturnError(this._faceVariantError));
            }
            if (this._settings.video) {
                this._faceVariantBuilder = ONFaceStepVariantConfig.builder();
                this._faceVariantBuilder.withVideoCaptureWithConfig(VideoStepConfiguration.alloc().initWithShowIntroVideo(true));
                this._configBuilder.withFaceStepOfVariant(this._faceVariantBuilder.buildAndReturnError(this._faceVariantError));
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