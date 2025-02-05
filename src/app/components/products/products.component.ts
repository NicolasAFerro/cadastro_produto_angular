import { Component } from '@angular/core';
import { Category } from '../../interfaces/category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  product: Product={}as Product;
  //se eud deixar assim, eu consigo condicionar oq quero ou não mostrar o componente.
  //ai todo o templante/layout do component filho desapareça
  //product ?: Product;


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
  saveProduct(){
    console.log('salvei o produto');
  }
}
