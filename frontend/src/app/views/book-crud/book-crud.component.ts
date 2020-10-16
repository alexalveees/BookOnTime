import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-book-crud',
  templateUrl: './book-crud.component.html',
  styleUrls: ['./book-crud.component.css']
})
export class BookCrudComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate([ '/books/create' ])
  }

}
