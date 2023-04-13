import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddIdeaPage } from './add-idea.page';

describe('AddIdeaPage', () => {
  let component: AddIdeaPage;
  let fixture: ComponentFixture<AddIdeaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddIdeaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
