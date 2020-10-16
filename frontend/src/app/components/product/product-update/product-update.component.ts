import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id);
    this.productService.readById(id).then((product) => {
      this.product = product
    }).catch((error) => {
      console.log(error)
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).then(() => {
      this.productService.showMessage('Livro Atualizado!')
      this.router.navigate(['/books'])
    }).catch(error => {
      console.log(error)
    })
  }

  cancelProduct(): void {
    this.router.navigate(['/books'])
  }

}
