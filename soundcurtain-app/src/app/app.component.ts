import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'soundcurtain-app';
  public isMainActive = false;

  public toggleMainActive(){
    console.log('button click hit.');
    this.isMainActive = !this.isMainActive;
  }
}
