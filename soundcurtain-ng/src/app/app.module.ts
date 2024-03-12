import { NgModule } from "@angular/core";
import { ClockModule } from "./common/clock/clock.module";
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [
    
    MainComponent
  ],
    imports: [
        ClockModule
    ],
    bootstrap: [MainComponent]
  })
  export class AppModule {}
  