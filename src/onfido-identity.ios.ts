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
            this._configBuilder.withAppearance(ONAppearance.alloc().initWithSupportDarkMode(true));

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
                // this._onFlow.withResponseHandler(this.responseHandler);
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

    responseHandler = (response: ONFlowResponse) => {
        if (response.userCanceled) {
            console.error('[onfido-result-cancel', response.userCanceled);
        } else if (response.results) {
            console.error('[onfido-result-array]', response.results);
        } else if (response.error) {
            console.error('[onfido-result-error]', response.error);
            console.error(response.error.code);
            switch (response.error.code) {
                case ONFlowError.CameraPermission:
                    console.error('It happens if the user denies permission to the sdk during the flow')
                    break;

                case ONFlowError.MicrophonePermission:
                    console.error('It happens when the user denies permission for microphone usage by the app during the flow')
                    break;

                case ONFlowError.Upload:
                    console.error('It happens when the SDK receives an error from a API call')
                    break;

                case ONFlowError.Exception:
                    console.error('It happens when an unexpected error occurs');
                    console.error(response.error.userInfo);
                    break;

                case ONFlowError.FailedToWriteToDisk:
                    console.error('It happens when the SDK tries to save capture to disk, maybe due to a lack of space')
                    break;
            }
        }
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
            }).catch((error) => {
                settings.errorHandler = this.errorHandler(error);
            });
    }
    errorHandler(error) {
        return new Promise((resolve, reject) => {
            resolve(error);
        });
    }
    rootVC() {
        let appWindow = UIApplication.sharedApplication.keyWindow;
        return appWindow.rootViewController;
    }
}