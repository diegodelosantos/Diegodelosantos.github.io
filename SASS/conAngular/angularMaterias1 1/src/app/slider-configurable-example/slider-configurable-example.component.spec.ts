import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderConfigurableExampleComponent } from './slider-configurable-example.component';

describe('SliderConfigurableExampleComponent', () => {
  let component: SliderConfigurableExampleComponent;
  let fixture: ComponentFixture<SliderConfigurableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderConfigurableExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderConfigurableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
