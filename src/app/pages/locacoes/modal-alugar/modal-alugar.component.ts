import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clientes } from 'src/app/services/clientes.service';
import { Titulo } from 'src/app/services/titulos.service';

export interface DialogData {
  titulo: Titulo;
  clientes: Clientes[]
}

@Component({
  selector: 'app-modal-alugar',
  templateUrl: './modal-alugar.component.html',
  styleUrls: ['./modal-alugar.component.css']
})
export class ModalAlugarComponent {
  inputValue?: string;
  selectedValue!: Clientes;

  constructor(
    public dialogRef: MatDialogRef<ModalAlugarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }  
  
}
