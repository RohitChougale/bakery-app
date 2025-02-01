import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpolrePage } from './expolre.page';

describe('ExpolrePage', () => {
  let component: ExpolrePage;
  let fixture: ComponentFixture<ExpolrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpolrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
