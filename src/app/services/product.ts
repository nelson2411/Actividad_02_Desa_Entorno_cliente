import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlService = 'https://api.npoint.io/1dee63ad8437c82b24fe';

  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  private productosOriginales: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http.get<Product[]>(this.urlService).subscribe({
      next: (data) => {
        this.productosOriginales = data;
        this.productsSubject.next(data);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }

  addProduct(newProduct: Product) {
    this.productosOriginales = [newProduct, ...this.productosOriginales];
    this.productsSubject.next(this.productosOriginales);
  }
}
