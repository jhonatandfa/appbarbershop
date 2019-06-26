import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbeariaPage } from './barbearia.page';

describe('BarbeariaPage', () => {
  let component: BarbeariaPage;
  let fixture: ComponentFixture<BarbeariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarbeariaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbeariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
