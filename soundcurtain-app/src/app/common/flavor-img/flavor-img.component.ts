import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.interfaces';
import { getRandomImage } from './store/flavor-img.actions';
import { selectRandomImage } from './store/flavor-img.selector';
@Component({
  selector: 'app-flavor-img',
  templateUrl: './flavor-img.component.html',
  styleUrls: ['./flavor-img.component.scss'],
})
export class FlavorImgComponent implements OnInit {
  image$ = this.store.pipe(select(selectRandomImage));
  constructor(private store: Store<AppState>) {
    // this.store.dispatch(getRandomSound(
  };

  ngOnInit(): void {
    console.log('in oninit')
    this.store.dispatch(getRandomImage());
    setInterval(() =>{
      const currentDate = new Date();
      this.store.dispatch(getRandomImage());
       }, 300000);
    

  }

}
