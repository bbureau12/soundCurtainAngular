import { bootstrapApplication } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { config } from 'rxjs';


const bootstrap = () => bootstrapApplication(AppComponent);
export default bootstrap;
