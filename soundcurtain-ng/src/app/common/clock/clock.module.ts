import { NgModule } from "@angular/core";
import { ClockComponent } from "./clock.component";

@NgModule({
    declarations: [
        ClockComponent
    ],
    exports: [
        ClockComponent,
    ]
})
export class ClockModule {}
