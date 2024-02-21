import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../modal-alugar/modal-alugar.component';
import { Clientes } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-modal-devolver',
  templateUrl: './modal-devolver.component.html',
  styleUrls: ['./modal-devolver.component.css']
})
export class ModalDevolverComponent {
  inputValue?: string;
  selectedValue!: Clientes;

  constructor(
    public dialogRef: MatDialogRef<ModalDevolverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }  
  
}
