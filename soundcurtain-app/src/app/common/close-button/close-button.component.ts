import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'sc-close-button',
    templateUrl: './close-button.component.html',
    styleUrls: [ './close-button.component.css' ]
  })
export class CloseButtonComponent  {
    constructor(private router: Router) {}
    @Input() routerLink ='/';
    navigateToRoute(): void {
      this.router.navigate([this.routerLink]); // Navigate to the default route
    }
  }