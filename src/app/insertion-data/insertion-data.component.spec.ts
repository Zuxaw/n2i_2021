import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionDataComponent } from './insertion-data.component';

describe('InsertionDataComponent', () => {
  let component: InsertionDataComponent;
  let fixture: ComponentFixture<InsertionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
