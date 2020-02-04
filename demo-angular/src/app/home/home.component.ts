import { Observable } from 'tns-core-modules/data/observable';
import { Component } from "@angular/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent extends Observable {
    onfido = false;
    public onfidoSettings: any;

    constructor() {
        super();

        this.onfidoSettings = {
            applicantId: "APPLICANT_ID",
            token: "SDK_TOKEN",
            enable: true,
            responseHandler: (response: any) => {
                if (response.userCanceled) {
                    // Flow cancelled by the user

                    console.log('user cancelled', response.userCanceled);

                } else if (response.results) {
                    // User completed the flow
                    // You can create your check here
                    console.log('user results', response.results);

                } else if (response.error) {
                    // Some error happened
                    console.log('user error', response.error);

                }
            }
        };
    }
}
