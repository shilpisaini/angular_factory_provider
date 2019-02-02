import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { PREFERRED_BOOKS, preferredBooksFactory } from '../preferred-books';

const JAVA_BOOK = new Book('Thinking in Java', 'Java');


@Component({
  selector: 'app-book',
  providers: [ 
    BookService,
    { provide: Book, useValue: JAVA_BOOK },
          { provide: PREFERRED_BOOKS, useFactory: preferredBooksFactory(3), deps: [Book, BookService] }
      ],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(@Inject(PREFERRED_BOOKS) private preferredBooks: string) { }

  ngOnInit() {
  }

}
