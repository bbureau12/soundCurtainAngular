import { NgModule } from "@angular/core";
import { ActiveButtonComponent } from "./active-button.component";
import { CommonModule } from "@angular/common";
import { IconModule } from "../icons/icon.module";

@NgModule({
    imports:[CommonModule, IconModule ],
    declarations: [
        ActiveButtonComponent
    ],
    exports: [
        ActiveButtonComponent,
    ]
})
export class ActiveButtonModule {}
