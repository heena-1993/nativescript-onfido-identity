import { Observable } from 'tns-core-modules/data/observable';
import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: "onfido-check",
    templateUrl: "./check.component.html"
})
export class CheckComponent extends Observable {
    onfido = false;
    public onfidoSettings: any;

    constructor(private routerExt: RouterExtensions) {
        super();

        this.onfidoSettings = {
            token: "eyJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoiTVNFMlhOdGpGZk02SWNnUGhaNlViVmZ4aXNLMlJ0eGJ6aVR4MlVha01TUmI4T3Q0VjA1MmRDS0RBTTFpXG5HdTdFSEdVbXJwdTlUREFVc1VXWHJXRGxVeHJMdGUzN3c2SkJJZ01VSkN1b2puazhPSVNXaGMwMGU4QkNcbk94d0FTdkpuXG4iLCJ1dWlkIjoiM2pISFJUZ1RCQVUiLCJleHAiOjE1ODE5MzM4MjYsInVybHMiOnsib25maWRvX2FwaV91cmwiOiJodHRwczovL2FwaS5vbmZpZG8uY29tIiwidGVsZXBob255X3VybCI6Imh0dHBzOi8vdGVsZXBob255Lm9uZmlkby5jb20iLCJkZXRlY3RfZG9jdW1lbnRfdXJsIjoiaHR0cHM6Ly9zZGsub25maWRvLmNvbSIsInN5bmNfdXJsIjoiaHR0cHM6Ly9zeW5jLm9uZmlkby5jb20iLCJob3N0ZWRfc2RrX3VybCI6Imh0dHBzOi8vaWQub25maWRvLmNvbSJ9fQ.bXPPBq1VvemA9nao5gb11kS35N588Wd9nEPQd_4i8M0",
            document: true,
            photo: true,
            // video: true,
            responseHandler: (response: any) => {
                if (response.userCanceled) {
                    console.log('user cancelled', response.userCanceled);
                    this.goBack();
                } else if (response.results) {
                    var paramsArray = [];
                    let output = response.results;
                    for (let i = 0; i < output.count; i++) {
                        let object = {...output[i].result, ...{
                            resultType: output[i].type,
                            instance: Object.prototype.toString.call(output[i].result).substrin
                        }} 
                        // let obj = Object.assign(output[i].result, {
                        //     resultType: output[i].type,
                        //     instance: Object.prototype.toString.call(output[i].result)
                        // });
                        paramsArray.push(object);
                    }
                    console.log(paramsArray);
                    // check api
                } else if (response.error) {
                    console.log('user error', response.error);
                    switch (response.error.code) {
                        case 0:
                            alert('It happens if the user denies permission to the sdk during the flow');
                            this.goBack();
                            break;

                        case 1:
                            alert('It happens when the user denies permission for microphone usage by the app during the flow');
                            this.goBack();
                            break;

                        case 2:
                            alert('It happens when the SDK receives an error from a API call');
                            this.goBack();
                            break;

                        case 3:
                            alert('It happens when an unexpected error occurs');
                            this.goBack();
                            break;

                        case 4:
                            alert('It happens when the SDK tries to save capture to disk, maybe due to a lack of space');
                            this.goBack();
                            break;
                    }
                }
            },
            errorHandler: (error: any) => error.then((error) => {
                console.error(`[nativescript-onfido]: ERROR:`);
                switch (error.code) {
                    case 0:
                        console.error('It happens if when token is missing or not valid')
                        break;

                    case 1:
                        console.error('It happens when no steps are provided');
                        break;

                    case 2:
                        console.error('It happens when the applicat is missing');
                        break;

                    case 3:
                        console.error('It happens when multiple applicants are provided');
                        break;

                    case 4:
                        console.error('It happens when the SDK gets multiple token in configuration');
                        break;
                    case 5:
                        console.error('It happens when the applicant is provided with sdk token');
                        break;
                }
            })
        };
    }
    goBack() {
        setTimeout(() => {
            this.routerExt.back();
        },100);
    }
}
