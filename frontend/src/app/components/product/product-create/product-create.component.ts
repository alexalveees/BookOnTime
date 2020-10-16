import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    isbn: null,
    title: '',
    author: '',
    price: null
  }

  constructor(private productService:ProductService,
    private router: Router) { }


  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).then(Response => {
      this.productService.showMessage('Livro Adicionado!')
      this.router.navigate(['/books'])
    }).catch((error) => {
      console.log(error);
    })  
  }

  cancelProduct(): void {
    this.router.navigate(['/books'])
  }

}
