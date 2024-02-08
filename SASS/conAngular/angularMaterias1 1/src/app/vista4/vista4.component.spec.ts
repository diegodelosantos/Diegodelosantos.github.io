import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista4Component } from './vista4.component';

describe('Vista4Component', () => {
  let component: Vista4Component;
  let fixture: ComponentFixture<Vista4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vista4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vista4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
