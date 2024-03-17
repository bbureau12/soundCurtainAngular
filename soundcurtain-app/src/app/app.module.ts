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
import {MatIconModule} from '@angular/material/icon';
import { ImageSizeClassDirective } from './common/flavor-img/imageSizeClassDirective';
import { ActiveButtonModule } from './common/ActiveButton/active-button.module';
import { RouteButtonModule } from './common/routeButton/route-button.module';
import { HomeComponent } from './home/home.component';
import { SettingsModule } from './settings/settings.containr.module';
import { RouterModule } from '@angular/router';
import { CloseButtonModule } from './common/close-button/close-button.module';

@NgModule({
  declarations: [
    AppComponent,
    FlavorImgComponent,
    HomeComponent,
    ImageSizeClassDirective,
  ],
  imports: [
    ActiveButtonModule,
    BrowserModule,
    AppRoutingModule,
    ClockModule,
    CloseButtonModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
    EffectsModule.forRoot([ImageEffects]),
    BrowserAnimationsModule,   
    MatCardModule,
    RouteButtonModule,
    RouterModule,
    SettingsModule,
  ],
  providers: [
    MediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
