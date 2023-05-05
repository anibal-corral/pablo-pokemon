import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSliderComponent } from './poke-slider.component';

describe('PokeSliderComponent', () => {
  let component: PokeSliderComponent;
  let fixture: ComponentFixture<PokeSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeSliderComponent]
    });
    fixture = TestBed.createComponent(PokeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
