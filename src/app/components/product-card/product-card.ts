import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
}
