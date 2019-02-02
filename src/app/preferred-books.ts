import { InjectionToken } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';



    export const PREFERRED_BOOKS = new InjectionToken<string>('book name');

    export function preferredBooksFactory(count: number) {
        return (myBook: Book, bookService: BookService): string => {
          return bookService
              .getAllBooks()
              .filter( book => book.category === myBook.category)
              .map(book => book.name)
              .slice(0, Math.max(0, count))
          .join(' | ');
        };
    };      



