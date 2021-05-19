import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyScholarshipComponent } from './apply-scholarship.component';

describe('ApplyScholarshipComponent', () => {
  let component: ApplyScholarshipComponent;
  let fixture: ComponentFixture<ApplyScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
