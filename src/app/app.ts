import { Component, signal } from '@angular/core';
import { Header } from '../app/components/header/header';
import { Footer } from '../app/components/footer/footer';
import { MainContent } from './components/main-content/main-content';
import { ProductComponent } from '../app/services/product';
import { Product } from './models/Product';
import { ProductsList } from './components/products-list/products-list';
import { ProductForm } from './components/product-form/product-form';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, MainContent, ProductsList, ProductForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('actividad_no2');

  constructor(private productService: ProductComponent) {
    this.productService.getProducts().subscribe((data: Product[]) => {
      console.log(data);
    });
  }

  onProductCreated(product: Product) {
    console.log('Producto creado:', product);
    // Aquí puedes agregar lógica para manejar el producto creado,
    // como enviarlo al servidor o agregarlo a una lista local.
  }
}
