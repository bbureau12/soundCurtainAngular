import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsContainer } from "./settings.container";
import { CloseButtonModule } from "../common/close-button/close-button.module";
import { SettingsComponent } from "./settings.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports:[CommonModule,
    CloseButtonModule,
    ReactiveFormsModule 
     ],
    declarations: [
        SettingsContainer, 
        SettingsComponent
    ],
    exports: [
        SettingsContainer,
        SettingsComponent
    ]
})
export class SettingsModule {}
