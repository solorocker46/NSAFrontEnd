import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScholarshipComponent } from './view-scholarship.component';

describe('ViewScholarshipComponent', () => {
  let component: ViewScholarshipComponent;
  let fixture: ComponentFixture<ViewScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
