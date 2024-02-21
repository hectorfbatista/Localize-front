import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Titulo, TitulosService } from 'src/app/services/titulos.service';
import { ModalExcluirComponent } from './modal-excluir/modal-excluir.component';
import { ModalNovoTituloComponent } from './modal-novo-titulo/modal-novo-titulo.component';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'description', 'amount', 'acoes'];
  dataSource!: MatTableDataSource<any>;
  titulos: Titulo[] = [];

  constructor(
    private titulosService: TitulosService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getTitulos();
  }

  criarTitulo() {
    const dialogRef = this.dialog.open(ModalNovoTituloComponent, {
      width: '35vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.criar(result);
      }
    });
  }

  excluirTitulo(titulo: Titulo) {
    const dialogRef = this.dialog.open(ModalExcluirComponent, {
      width: '35vw',
      data: {
        titulo: titulo,
        clientes: []
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.excluir(titulo);
      }
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getTitulos() {
    this.titulosService.getTitulos().subscribe((titulos: any) => {
      this.titulos = titulos;
      this.setData(this.titulos);
    })
  }

  private setData(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private excluir(titulo: Titulo) {
    this.titulosService.excluirTitulo(titulo._id).subscribe(() => {
      this.snackBar.open('Título excluido com sucesso!', undefined, {duration: 1500, panelClass: 'success-snackbar'});
      this.getTitulos();
    })
  }

  private criar(titulo: Titulo) {
    this.titulosService.criarTitulo(titulo).subscribe(() => {
      this.snackBar.open('Título criado com sucesso!', undefined, {duration: 1500, panelClass: 'success-snackbar'});
      this.getTitulos();
    })
  }

}
