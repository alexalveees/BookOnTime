import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './views/home/home.component';
import { BookCrudComponent} from './views/book-crud/book-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "books",
    component: BookCrudComponent
  },{
    path: "books/create",
    component: ProductCreateComponent
  },{
    path: "books/update/:id",
    component: ProductUpdateComponent
  },{
    path: "books/delete/:id",
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
