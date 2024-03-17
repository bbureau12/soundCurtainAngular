import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteButtonComponent } from "./route-button.component";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    imports:[CommonModule, 
        RouterModule ],
    declarations: [
        RouteButtonComponent,
    ],
    exports: [
        RouteButtonComponent,
    ]
})
export class RouteButtonModule {}
