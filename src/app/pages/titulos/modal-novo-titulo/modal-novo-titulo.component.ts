import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../locacoes/modal-alugar/modal-alugar.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-novo-titulo',
  templateUrl: './modal-novo-titulo.component.html',
  styleUrls: ['./modal-novo-titulo.component.css']
})
export class ModalNovoTituloComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalNovoTituloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private createForm(): void{
    this.form = this.fb.group({ 
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }
}
