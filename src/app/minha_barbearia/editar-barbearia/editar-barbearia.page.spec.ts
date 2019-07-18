import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBarbeariaPage } from './editar-barbearia.page';

describe('EditarBarbeariaPage', () => {
  let component: EditarBarbeariaPage;
  let fixture: ComponentFixture<EditarBarbeariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarBarbeariaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBarbeariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
