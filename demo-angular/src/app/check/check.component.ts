import { Observable } from "tns-core-modules/data/observable";
import { Component, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { isIOS, isAndroid } from "tns-core-modules/ui/page/page";

@Component({
    selector: "onfido-check",
    templateUrl: "./check.component.html"
})
export class CheckComponent extends Observable {
    onfido = false;
    public onfidoSettings: any;

    constructor(private routerExt: RouterExtensions, private ngZone: NgZone) {
        super();

        this.onfidoSettings = {
            token:
                "eyJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoiTVNFMlhOdGpGZk02SWNnUGhaNlViVmZ4aXNLMlJ0eGJ6aVR4MlVha01TUmI4T3Q0VjA1MmRDS0RBTTFpXG5HdTdFSEdVbXJwdTlUREFVc1VXWHJXRGxVeHJMdGUzN3c2SkJJZ01VSkN1b2puazhPSVNXaGMwMGU4QkNcbk94d0FTdkpuXG4iLCJ1dWlkIjoiM2pISFJUZ1RCQVUiLCJleHAiOjE1ODU1NTE4MzMsInVybHMiOnsib25maWRvX2FwaV91cmwiOiJodHRwczovL2FwaS5vbmZpZG8uY29tIiwidGVsZXBob255X3VybCI6Imh0dHBzOi8vdGVsZXBob255Lm9uZmlkby5jb20iLCJkZXRlY3RfZG9jdW1lbnRfdXJsIjoiaHR0cHM6Ly9zZGsub25maWRvLmNvbSIsInN5bmNfdXJsIjoiaHR0cHM6Ly9zeW5jLm9uZmlkby5jb20iLCJob3N0ZWRfc2RrX3VybCI6Imh0dHBzOi8vaWQub25maWRvLmNvbSJ9fQ.ifrG_GwGBkkwVPv5NnBJ_ZCzPXto7GwTZfes-RBCNjg",
            document: true,
            photo: true,
            // video: true,
            responseHandler: (response: any) => {
                if (isIOS) {
                    if (response.userCanceled) {
                        console.log("user cancelled", response.userCanceled);
                        this.goBack();
                    } else if (response.results) {
                        // put your logic here in NgZone
                        this.ngZone.run(() => {
                            console.log(response.results);
                            let output = response.results;
                            for (let i = 0; i < output.count; i++) {
                                console.log(output[i]);
                                console.log(output[i].type);
                                console.log(output[i].result);
                            }
                        });
                    } else if (response.error) {
                        console.log("user error", response.error);
                        switch (response.error.code) {
                            case 0:
                                alert(
                                    "It happens if the user denies permission to the sdk during the flow"
                                );
                                this.goBack();
                                break;

                            case 1:
                                alert(
                                    "It happens when the user denies permission for microphone usage by the app during the flow"
                                );
                                this.goBack();
                                break;

                            case 2:
                                alert(
                                    "It happens when the SDK receives an error from a API call"
                                );
                                this.goBack();
                                break;

                            case 3:
                                alert(
                                    "It happens when an unexpected error occurs"
                                );
                                this.goBack();
                                break;

                            case 4:
                                alert(
                                    "It happens when the SDK tries to save capture to disk, maybe due to a lack of space"
                                );
                                this.goBack();
                                break;
                        }
                    }
                } else if (isAndroid) {
                    console.log("isAndroid", response);
                    if (response.results) {
                        if (response.results.face) {
                            console.log(
                                "face variant",
                                response.results.face.variant
                            ); console.log(
                                "face id",
                                response.results.face.id
                            );
                            console.log(
                                "document.type",
                                response.results.document.type
                            );
                            if(response.results.document.front)
                            console.log(
                                "document front type side and id",
                                response.results.document.front.type, response.results.document.front.side, response.results.document.front.id
                            );
                            if(response.results.document.back)
                            console.log(
                                "document back type side and id",
                                response.results.document.back.type, response.results.document.back.side, response.results.document.back.id
                            );
                        }
                    }
                    if (response.userCanceled) {
                        console.log("userCanceled id", response.userCanceled);
                    }
                    if (response.error) {
                        console.log("error id", response.error);
                    }
                }
            },
            errorHandler: (error: any) =>
                error.then(error => {
                    console.error(`[nativescript-onfido]: ERROR:`);
                    switch (error.code) {
                        case 0:
                            console.error(
                                "It happens if when token is missing or not valid"
                            );
                            break;

                        case 1:
                            console.error(
                                "It happens when no steps are provided"
                            );
                            break;

                        case 2:
                            console.error(
                                "It happens when the applicat is missing"
                            );
                            break;

                        case 3:
                            console.error(
                                "It happens when multiple applicants are provided"
                            );
                            break;

                        case 4:
                            console.error(
                                "It happens when the SDK gets multiple token in configuration"
                            );
                            break;
                        case 5:
                            console.error(
                                "It happens when the applicant is provided with sdk token"
                            );
                            break;
                    }
                })
        };
    }
    goBack() {
        setTimeout(() => {
            this.routerExt.back();
        }, 100);
    }
}
