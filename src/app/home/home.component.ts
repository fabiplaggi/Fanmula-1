import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../services/producto/producto.service';
import { Productos } from '../shared/models/producto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  productos: Productos[] = [];
  constructor(private ps:ProductoService) {

  }

  ngOnInit(): void {
      this.productos = this.ps.getAll();
  }

}
