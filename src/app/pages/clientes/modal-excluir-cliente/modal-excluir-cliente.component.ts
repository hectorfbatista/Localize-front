import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clientes } from 'src/app/services/clientes.service';

export interface DialogClienteData {
  cliente: Clientes;
}

@Component({
  selector: 'app-modal-excluir-cliente',
  templateUrl: './modal-excluir-cliente.component.html',
  styleUrls: ['./modal-excluir-cliente.component.css']
})
export class ModalExcluirClienteComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalExcluirClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogClienteData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
