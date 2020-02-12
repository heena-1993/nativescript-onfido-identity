import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { registerElement } from 'nativescript-angular';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
registerElement('Onfido', () => require('nativescript-onfido-identity').OnfidoLayout);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
