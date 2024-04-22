import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetAccountPage } from './reset-account.page';

describe('ResetAccountPage', () => {
  let component: ResetAccountPage;
  let fixture: ComponentFixture<ResetAccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResetAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
