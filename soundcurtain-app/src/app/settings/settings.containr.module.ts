import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsContainer } from "./settings.container";
import { AppModule } from "../app.module";
import { CloseButtonComponent } from "../common/close-button/close-button.component";
import { CloseButtonModule } from "../common/close-button/close-button.module";

@NgModule({
    imports:[CommonModule,
    CloseButtonModule ],
    declarations: [
        SettingsContainer
    ],
    exports: [
        SettingsContainer,
    ]
})
export class SettingsModule {}
