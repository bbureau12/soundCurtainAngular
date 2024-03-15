import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockModule } from './common/clock/clock.module';
import { FlavorImgComponent } from './common/flavor-img/flavor-img.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ImageEffects } from './common/flavor-img/store/flavor-img.effects';
import { reducers } from './store/app.state';
import { MediaService } from './services/mediaService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ImageSizeClassDirective } from './common/flavor-img/imageSizeClassDirective';

@NgModule({
  declarations: [
    AppComponent,
    FlavorImgComponent,
    ImageSizeClassDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClockModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
    EffectsModule.forRoot([ImageEffects]),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    MediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
