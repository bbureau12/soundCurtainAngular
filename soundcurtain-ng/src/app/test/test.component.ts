import { Component, OnInit } from '@angular/core';
import { Subject, map, take, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  const countdown$ = timer(0, 1000).pipe(
    take(300),
    map(secondsElapsed => 300 - secondsElapsed)
  );
  
  countdown$.subscribe(secondsLeft => {
    this.secondsLeft = secondsLeft;
  });
}