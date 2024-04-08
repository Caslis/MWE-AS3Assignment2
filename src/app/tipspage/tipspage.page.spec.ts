import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipspagePage } from './tipspage.page';

describe('TipspagePage', () => {
  let component: TipspagePage;
  let fixture: ComponentFixture<TipspagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TipspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
