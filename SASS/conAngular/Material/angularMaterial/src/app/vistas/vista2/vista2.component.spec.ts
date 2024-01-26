import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista2Component } from './vista2.component';

describe('Vista2Component', () => {
  let component: Vista2Component;
  let fixture: ComponentFixture<Vista2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vista2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vista2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
