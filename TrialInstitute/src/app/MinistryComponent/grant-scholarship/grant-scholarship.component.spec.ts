import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantScholarshipComponent } from './grant-scholarship.component';

describe('GrantScholarshipComponent', () => {
  let component: GrantScholarshipComponent;
  let fixture: ComponentFixture<GrantScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
