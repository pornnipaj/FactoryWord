import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVocabPage } from './create-vocab.page';

describe('CreateVocabPage', () => {
  let component: CreateVocabPage;
  let fixture: ComponentFixture<CreateVocabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVocabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVocabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
