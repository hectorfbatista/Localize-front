import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirClienteComponent } from './modal-excluir-cliente.component';

describe('ModalExcluirClienteComponent', () => {
  let component: ModalExcluirClienteComponent;
  let fixture: ComponentFixture<ModalExcluirClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExcluirClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExcluirClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
