import { Component, Input } from "@angular/core";

@Component({
    selector: 'sc-icon',
    templateUrl: './icon.component.html',
    styleUrls: [ './icon.component.css' ]
  })
export class IconComponent  {
    @Input() iconPath = '';
    @Input() className: string | null = '';
    @Input() altText = 'An icon';
  }