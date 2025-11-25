import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

interface Producto {
  id?: number;
  nombre: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
  <div style="font-family: Arial; margin: 20px;">
    <h1>Mini eCommerce (Angular)</h1>
    <form (submit)="crearProducto()">
      <input [(ngModel)]="nuevo.nombre" name="nombre" placeholder="Nombre" required>
      <input [(ngModel)]="nuevo.precio" name="precio" type="number" step="0.01" placeholder="Precio" required>
      <input [(ngModel)]="nuevo.stock" name="stock" type="number" placeholder="Stock" required>
      <button type="submit">Agregar</button>
    </form>
    <hr>
    <table border="1" cellpadding="6" style="border-collapse: collapse;">
      <tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Stock</th><th>Acciones</th></tr>
      <tr *ngFor="let p of productos">
        <td>{{p.id}}</td>
        <td><input [(ngModel)]="p.nombre"></td>
        <td><input [(ngModel)]="p.precio" type="number" step="0.01"></td>
        <td><input [(ngModel)]="p.stock" type="number"></td>
        <td>
          <button (click)="guardar(p)">Guardar</button>
          <button (click)="eliminar(p.id)">Eliminar</button>
        </td>
      </tr>
    </table>
  </div>
  `
})
export class AppComponent {
  productos: Producto[] = [];
  nuevo: Producto = { nombre: '', precio: 0, stock: 0 };
  private base = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) {
    this.cargar();
  }

  cargar() {
    this.http.get<Producto[]>(this.base).subscribe(res => this.productos = res);
  }

  crearProducto() {
    if(!this.nuevo.nombre) return;
    this.http.post<Producto>(this.base, this.nuevo).subscribe(() => {
      this.nuevo = { nombre: '', precio: 0, stock: 0 };
      this.cargar();
    });
  }

  guardar(p: Producto) {
    if(!p.id) return;
    this.http.put<Producto>(`${this.base}/${p.id}`, p).subscribe(() => this.cargar());
  }

  eliminar(id?: number) {
    if(!id) return;
    this.http.delete(`${this.base}/${id}`).subscribe(() => this.cargar());
  }
}