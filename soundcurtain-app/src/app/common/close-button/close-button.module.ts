import { NgModule } from "@angular/core";
import { CloseButtonComponent } from "./close-button.component";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    imports:[CommonModule,         MatIconModule ],
    declarations: [
        CloseButtonComponent,
    ],
    exports: [
        CloseButtonComponent,
    ]
})
export class CloseButtonModule {}
