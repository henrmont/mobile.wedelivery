import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockAccountPage } from './block-account.page';

describe('BlockAccountPage', () => {
  let component: BlockAccountPage;
  let fixture: ComponentFixture<BlockAccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlockAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
