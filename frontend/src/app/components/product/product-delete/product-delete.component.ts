import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).then(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).then(() => {
      this.productService.showMessage("Livro excluido!")
      this.router.navigate(["/books"])
    })

  }

  cancelProduct(): void {
    this.router.navigate(['/books'])
  }

}
