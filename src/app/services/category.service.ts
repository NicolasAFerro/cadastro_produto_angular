import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  categories: Category[] = [
    { id: 1, name: 'Produção Própria' },
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

  getCategories(): Category[] {
    return this.categories;
  }
}
