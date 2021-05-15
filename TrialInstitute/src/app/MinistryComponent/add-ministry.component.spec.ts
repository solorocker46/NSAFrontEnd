import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMinistryComponent } from './add-ministry.component';

describe('AddMinistryComponent', () => {
  let component: AddMinistryComponent;
  let fixture: ComponentFixture<AddMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
