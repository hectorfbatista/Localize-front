import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoTituloComponent } from './modal-novo-titulo.component';

describe('ModalNovoTituloComponent', () => {
  let component: ModalNovoTituloComponent;
  let fixture: ComponentFixture<ModalNovoTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNovoTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNovoTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
