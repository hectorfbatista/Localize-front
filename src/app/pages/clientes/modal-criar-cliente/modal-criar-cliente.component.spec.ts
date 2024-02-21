import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarClienteComponent } from './modal-criar-cliente.component';

describe('ModalCriarClienteComponent', () => {
  let component: ModalCriarClienteComponent;
  let fixture: ComponentFixture<ModalCriarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCriarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCriarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
