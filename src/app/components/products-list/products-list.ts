import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { Product } from '../../models/Product';
import { ProductCard } from '../product-card/product-card';
import { Observable } from 'rxjs';
import { CommonModule, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCard, CommonModule, AsyncPipe],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts();
  }

  onEliminar(id: string) {
    console.log('Eliminar producto con id:', id);
  }
}
