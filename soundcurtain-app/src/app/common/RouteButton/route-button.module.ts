import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconModule } from "../icons/icon.module";
import { RouteButtonComponent } from "./route-button.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports:[CommonModule, 
        IconModule,
        RouterModule ],
    declarations: [
        RouteButtonComponent,
    ],
    exports: [
        RouteButtonComponent,
    ]
})
export class RouteButtonModule {}
