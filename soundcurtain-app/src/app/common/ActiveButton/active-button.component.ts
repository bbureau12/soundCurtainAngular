import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { selectCurrentTimeClass } from "src/app/actionQueue/store/actionQueue.selector";
import { AppState } from "src/app/store/app.interfaces";

@Component({
    selector: 'sc-active-button',
    templateUrl: './active-button.component.html',
    styleUrls: [ './active-button.component.css' ]
  })
export class ActiveButtonComponent  {
    @Input() isActive: boolean | null = false;
    @Input() inactiveLabel = '';
    @Input() activeLabel = '';
    @Input() activeIconPath : string | undefined = undefined;
    @Input() inactiveIconPath : string | undefined = undefined;
    @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();
    public btnClass = this.store.select(selectCurrentTimeClass);
    constructor(private actions$: Actions, private store: Store<AppState>){
    }
    onClick(): void {
        this.buttonClicked.emit();
    }
  }