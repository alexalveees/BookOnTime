import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { db } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar : MatSnackBar,
    private http: HttpClient,) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-sucess']
    })  
  }

  async create(product: Product): Promise<firebase.database.DataSnapshot> {
    return db.ref('products').push().set(product);
  }

  async delete(id: string): Promise<void> {
    return db.ref(`products/${id}`).remove();
  }

  async read(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      db.ref('products').once('value').then((products: firebase.database.DataSnapshot) => {
        if (products.val()) {
          const produtos: Product[] = [];
          products.forEach((product) => {
            produtos.push({
              id: product.key,
              isbn: product.child('isbn').val(),
              title: product.child('title').val(),
              author: product.child('author').val(),
              price: product.child('price').val(),
            })
          });
          resolve(produtos);
        } else {
          resolve([])
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  readById(id: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      db.ref(`products/${id}`)
        .once('value',(produto) =>{
          const product = produto.val();
          console.log(product)
          product.id = produto.key;
          resolve(product);
        },(error)=>{
          reject(error);
        });
    })
  }

  update(product: Product): Promise<void> {
    const id: string = product.id.valueOf();
    delete product.id;
    return db.ref('products').child(id).update(product);
  }
}
