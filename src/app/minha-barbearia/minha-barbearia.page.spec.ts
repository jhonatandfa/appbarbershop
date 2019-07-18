import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaBarbeariaPage } from './minha-barbearia.page';

describe('MinhaBarbeariaPage', () => {
  let component: MinhaBarbeariaPage;
  let fixture: ComponentFixture<MinhaBarbeariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaBarbeariaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaBarbeariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
