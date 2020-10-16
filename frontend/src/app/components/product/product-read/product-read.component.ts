import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['isbn', 'title', 'author', 'price', 'action' ]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.LerPagina();
  }

  async DeleteProduct(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.productService.delete(id).then(() => {
        this.productService.showMessage(`O veículo foi removido!`);
        this.LerPagina().then(() => {
          resolve();
        }).catch((error) => {
          console.log(error)
        })
      }).catch((error) => {
        console.log(error);
        reject(error);
      })
    });
  }

  async LerPagina(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.productService.read().then((produtos) => {
        this.products = produtos;
        resolve()
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  }
}
