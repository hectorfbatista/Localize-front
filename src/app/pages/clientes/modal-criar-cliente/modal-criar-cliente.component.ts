import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../locacoes/modal-alugar/modal-alugar.component';
import { ModalNovoTituloComponent } from '../../titulos/modal-novo-titulo/modal-novo-titulo.component';

@Component({
  selector: 'app-modal-criar-cliente',
  templateUrl: './modal-criar-cliente.component.html',
  styleUrls: ['./modal-criar-cliente.component.css']
})
export class ModalCriarClienteComponent implements OnInit {
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
      tel: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
