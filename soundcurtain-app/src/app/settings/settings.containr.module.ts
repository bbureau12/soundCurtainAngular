import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsContainer } from "./settings.container";
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
