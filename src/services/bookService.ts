import { Book } from '../types';
import { ApiService } from './api';

export const bookService = {
  getBooks: () => ApiService.getBooks(),
  
  addBook: async (bookData: Partial<Book>) => {
    const newBook = await ApiService.addBook(bookData);
    return newBook;
  },
  
  // Add more book-related methods here
};