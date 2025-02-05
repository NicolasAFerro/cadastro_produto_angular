import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  sonCategories: Category[] = [];
}
