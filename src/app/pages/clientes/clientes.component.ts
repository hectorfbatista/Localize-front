import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Clientes, ClientesService } from 'src/app/services/clientes.service';
import { ModalCriarClienteComponent } from './modal-criar-cliente/modal-criar-cliente.component';
import { ModalExcluirClienteComponent } from './modal-excluir-cliente/modal-excluir-cliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'description', 'amount', 'acoes'];
  dataSource!: MatTableDataSource<any>;
  clientes: Clientes[] = [];

  constructor(
    private clientesService: ClientesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }
  
  ngOnInit(): void {
    this.getClientes();
  }

  criarCliente() {
    const dialogRef = this.dialog.open(ModalCriarClienteComponent, {
      width: '35vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.criar(result);
      }
    });
  }

  excluirCliente(cliente: Clientes) {
    const dialogRef = this.dialog.open(ModalExcluirClienteComponent, {
      width: '35vw',
      data: {
        cliente: cliente,
        clientes: []
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.excluir(cliente);
      }
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getClientes() {
    this.clientesService.getClientes().subscribe((clientes: any) => {
      this.clientes = clientes;
      this.setData(this.clientes);
    })
  }

  private setData(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private excluir(cliente: Clientes) {
    this.clientesService.excluirCliente(cliente._id).subscribe(() => {
      this.snackBar.open('Título excluido com sucesso!', undefined, {duration: 1500, panelClass: 'success-snackbar'});
      this.getClientes();
    })
  }

  private criar(cliente: Clientes) {
    this.clientesService.criarCliente(cliente).subscribe(() => {
      this.snackBar.open('Título criado com sucesso!', undefined, {duration: 1500, panelClass: 'success-snackbar'});
      this.getClientes();
    })
  }

}
