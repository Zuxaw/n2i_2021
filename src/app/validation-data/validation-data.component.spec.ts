import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDataComponent } from './validation-data.component';

describe('ValidationDataComponent', () => {
  let component: ValidationDataComponent;
  let fixture: ComponentFixture<ValidationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
