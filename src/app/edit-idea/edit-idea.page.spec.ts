import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditIdeaPage } from './edit-idea.page';

describe('EditIdeaPage', () => {
  let component: EditIdeaPage;
  let fixture: ComponentFixture<EditIdeaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditIdeaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
