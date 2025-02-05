import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product: Product= {} as Product;
  @Input()
  sonCategories: Category[] = [];

  teste(){
    console.log(`nome: ${this.product.name}\n descrição: ${this.product.description}`);
    console.log(`\n preço: ${this.product.price}\n promoção: ${this.product.promotion}`);
    console.log(`\n new: ${this.product.newProduct}\n categoria: ${this.product.category.name}`);
    console.log(`\n ${this.product.category.id} `);

  }
}
