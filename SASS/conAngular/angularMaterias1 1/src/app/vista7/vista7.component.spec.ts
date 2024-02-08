import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista7Component } from './vista7.component';

describe('Vista7Component', () => {
  let component: Vista7Component;
  let fixture: ComponentFixture<Vista7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vista7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vista7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
