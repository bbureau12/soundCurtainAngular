import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'sc-active-button',
    templateUrl: './active-button.component.html',
    styleUrls: [ './active-button.component.css' ]
  })
export class ActiveButtonComponent  {
    @Input() isActive = false;
    @Input() inactiveLabel = '';
    @Input() activeLabel = '';
    @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

    onClick(): void {
        this.buttonClicked.emit();
    }
  }