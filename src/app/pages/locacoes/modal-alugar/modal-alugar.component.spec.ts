import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlugarComponent } from './modal-alugar.component';

describe('ModalAlugarComponent', () => {
  let component: ModalAlugarComponent;
  let fixture: ComponentFixture<ModalAlugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAlugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
