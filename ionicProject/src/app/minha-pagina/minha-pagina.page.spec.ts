import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaPaginaPage } from './minha-pagina.page';

describe('MinhaPaginaPage', () => {
  let component: MinhaPaginaPage;
  let fixture: ComponentFixture<MinhaPaginaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaPaginaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
