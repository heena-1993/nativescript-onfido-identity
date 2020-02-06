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
            token: "YOUR_SDK_TOKEN",
            document: true,
            responseHandler: (response: any) => {
                if (response.userCanceled) {
                    console.log('user cancelled', response.userCanceled);
                } else if (response.results) {
                    console.log('user results', response.results);
                } else if (response.error) {
                    console.log('user error', response.error);
                }
            }
        };
    }
}
