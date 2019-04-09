import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVocabPage } from './search-vocab.page';

describe('SearchVocabPage', () => {
  let component: SearchVocabPage;
  let fixture: ComponentFixture<SearchVocabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVocabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVocabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
