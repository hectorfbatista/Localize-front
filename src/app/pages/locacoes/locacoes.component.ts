import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Titulo, TitulosService } from 'src/app/services/titulos.service';
import { ModalAlugarComponent } from './modal-alugar/modal-alugar.component';
import { ModalDevolverComponent } from './modal-devolver/modal-devolver.component';
import { Clientes, ClientesService } from 'src/app/services/clientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-locacoes',
  templateUrl: './locacoes.component.html',
  styleUrls: ['./locacoes.component.css']
})
export class LocacoesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'description', 'amount', 'acoes'];
  dataSource!: MatTableDataSource<any>;
  titulos: Titulo[] = [];
  clientes: Clientes[] = [];

  constructor(
    private titulosService: TitulosService,
    private clientesService: ClientesService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
    ) { }
  
  ngOnInit(): void {
    this.getTitulos();
    this.getClientes();
  }

  alugarTitulo(titulo: Titulo) {
    const dialogRef = this.dialog.open(ModalAlugarComponent, {
      width: '35vw',
      data: {
        titulo: titulo,
        clientes: this.clientes
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.alugar(titulo, result);
      }
    });
  }

  devolverTitulo(titulo: Titulo) {
    const dialogRef = this.dialog.open(ModalDevolverComponent, {
      width: '35vw',
      data: {
        titulo: titulo,
        clientes: this.clientes
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.devolver(titulo, result);
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
    });
  }

  private getClientes() {
    this.clientesService.getClientes().subscribe((clientes: any) => {
      this.clientes = clientes;
    });
  }

  private setData(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private alugar(titulo: Titulo, clienteId: number) {
    this.titulosService.alugarTitulo(titulo, clienteId).subscribe(() => {
      this.snackBar.open('Título alugado com sucesso!', undefined, {duration: 1500, panelClass: 'success-snackbar'});
      this.getTitulos();
    });
  }

  private devolver(titulo: Titulo, clienteId: number) {
    this.titulosService.devolverTitulo(titulo, clienteId).subscribe(() => {
      this.snackBar.open('Título devolvido com sucesso!', undefined, {duration: 1500, panelClass: 'success-snackbar'});
      this.getTitulos();
    });
  }

}
