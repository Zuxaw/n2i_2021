import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionDataComponent } from './edition-data.component';

describe('EditionDataComponent', () => {
  let component: EditionDataComponent;
  let fixture: ComponentFixture<EditionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
