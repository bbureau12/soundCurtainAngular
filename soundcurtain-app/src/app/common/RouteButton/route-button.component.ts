import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'sc-route-button',
    templateUrl: './route-button.component.html',
    styleUrls: [ './route-button.component.css' ]
  })
export class RouteButtonComponent  {
    @Input() label = '';
    @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

    onClick(): void {
        this.buttonClicked.emit();
    }
  }