import { NgModule } from "@angular/core";
import { ActiveButtonComponent } from "./active-button.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[CommonModule ],
    declarations: [
        ActiveButtonComponent
    ],
    exports: [
        ActiveButtonComponent,
    ]
})
export class ActiveButtonModule {}
