import { useState, useEffect } from 'react';
import { Book } from '../types';
import { bookService } from '../services/bookService';

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await bookService.getBooks();
        setBooks(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch books'));
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const addBook = async (bookData: Partial<Book>) => {
    try {
      const newBook = await bookService.addBook(bookData);
      setBooks(prev => [...prev, newBook]);
      return newBook;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to add book');
    }
  };

  return {
    books,
    loading,
    error,
    addBook
  };
}