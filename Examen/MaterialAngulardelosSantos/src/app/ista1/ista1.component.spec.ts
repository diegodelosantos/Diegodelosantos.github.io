import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ista1Component } from './ista1.component';

describe('Ista1Component', () => {
  let component: Ista1Component;
  let fixture: ComponentFixture<Ista1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ista1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ista1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
