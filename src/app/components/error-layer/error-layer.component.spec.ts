import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLayerComponent } from './error-layer.component';

describe('ErrorLayerComponent', () => {
  let component: ErrorLayerComponent;
  let fixture: ComponentFixture<ErrorLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
