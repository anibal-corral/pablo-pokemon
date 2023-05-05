import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDatailsComponent } from './poke-datails.component';

describe('PokeDatailsComponent', () => {
  let component: PokeDatailsComponent;
  let fixture: ComponentFixture<PokeDatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeDatailsComponent]
    });
    fixture = TestBed.createComponent(PokeDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
