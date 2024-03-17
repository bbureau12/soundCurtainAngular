import { NgModule } from "@angular/core";
import { RouteButtonComponent } from "./route-button.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[CommonModule ],
    declarations: [
        RouteButtonComponent
    ],
    exports: [
        RouteButtonComponent,
    ]
})
export class RouteButtonModule {}
