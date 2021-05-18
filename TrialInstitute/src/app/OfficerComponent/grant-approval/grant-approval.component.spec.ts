import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantApprovalComponent } from './grant-approval.component';

describe('GrantApprovalComponent', () => {
  let component: GrantApprovalComponent;
  let fixture: ComponentFixture<GrantApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
