import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrastrarSoltarComponent } from './arrastrar-soltar.component';

describe('ArrastrarSoltarComponent', () => {
  let component: ArrastrarSoltarComponent;
  let fixture: ComponentFixture<ArrastrarSoltarComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrastrarSoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
