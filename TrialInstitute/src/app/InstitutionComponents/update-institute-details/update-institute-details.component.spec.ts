import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInstituteDetailsComponent } from './update-institute-details.component';

describe('UpdateInstituteDetailsComponent', () => {
  let component: UpdateInstituteDetailsComponent;
  let fixture: ComponentFixture<UpdateInstituteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInstituteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInstituteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
