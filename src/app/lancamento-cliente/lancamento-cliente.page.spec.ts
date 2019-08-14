import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoClientePage } from './lancamento-cliente.page';

describe('LancamentoClientePage', () => {
  let component: LancamentoClientePage;
  let fixture: ComponentFixture<LancamentoClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
