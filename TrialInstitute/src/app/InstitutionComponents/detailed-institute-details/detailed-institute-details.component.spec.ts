import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedInstituteDetailsComponent } from './detailed-institute-details.component';

describe('DetailedInstituteDetailsComponent', () => {
  let component: DetailedInstituteDetailsComponent;
  let fixture: ComponentFixture<DetailedInstituteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedInstituteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedInstituteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
