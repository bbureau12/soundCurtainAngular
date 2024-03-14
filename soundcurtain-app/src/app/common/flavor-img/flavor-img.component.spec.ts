import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorImgComponent } from './flavor-img.component';

describe('FlavorImgComponent', () => {
  let component: FlavorImgComponent;
  let fixture: ComponentFixture<FlavorImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavorImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlavorImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
