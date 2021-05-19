import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByInstitutionNameComponent } from './view-by-institution-name.component';

describe('ViewByInstitutionNameComponent', () => {
  let component: ViewByInstitutionNameComponent;
  let fixture: ComponentFixture<ViewByInstitutionNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByInstitutionNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByInstitutionNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
