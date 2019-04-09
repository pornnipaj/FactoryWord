import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVocabPage } from './edit-vocab.page';

describe('EditVocabPage', () => {
  let component: EditVocabPage;
  let fixture: ComponentFixture<EditVocabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVocabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVocabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
