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
import { ActiveButtonModule } from './common/ActiveButton/active-button.module';
import { RouteButtonModule } from './common/routeButton/route-button.module';
import { HomeComponent } from './home/home.component';
import { SettingsModule } from './settings/settings.containr.module';
import { RouterModule } from '@angular/router';
import { CloseButtonModule } from './common/close-button/close-button.module';
import { SettingService } from './services/settingsService';
import { SettingsEffects } from './settings/store/settings.effects';
import { NowPlayingService } from './services/nowPlayingService';
import { ActionService } from './services/actionService';
import { ActionQueueEffects } from './actionQueue/store/actionQueue.effects';
import { IconModule } from './common/icons/icon.module';

@NgModule({
  declarations: [
    AppComponent,
    FlavorImgComponent,
    HomeComponent,
    ImageSizeClassDirective,
  ],
  imports: [
    ActiveButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ClockModule,
    CloseButtonModule,
    EffectsModule.forRoot([ActionQueueEffects, ImageEffects, SettingsEffects]),
    HttpClientModule,
    IconModule,
    MatCardModule,
    RouteButtonModule,
    RouterModule,
    SettingsModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [
    ActionService,
    MediaService,
    NowPlayingService,
    SettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
