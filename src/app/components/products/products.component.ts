import { Component } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Produção Própria',
    },
    {
      id: 2,
      name: 'Nacional',
    },
    {
      id: 3,
      name: 'Importado',
    },
    {
      id: 4,
      name: 'Premium',
    },
  ];
}
