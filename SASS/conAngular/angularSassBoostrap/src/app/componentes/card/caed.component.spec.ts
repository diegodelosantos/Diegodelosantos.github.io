import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaedComponent } from './caed.component';

describe('CaedComponent', () => {
  let component: CaedComponent;
  let fixture: ComponentFixture<CaedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
