import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista3Component } from './vista3.component';

describe('Vista3Component', () => {
  let component: Vista3Component;
  let fixture: ComponentFixture<Vista3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vista3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vista3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
