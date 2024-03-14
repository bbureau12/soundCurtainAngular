import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlavorImgComponent } from "./flavor-img.component";

@NgModule({
    imports:[CommonModule ],
    declarations: [
        FlavorImgComponent
    ],
    exports: [
        FlavorImgComponent,
    ]
})
export class FlavorImgModule {}
