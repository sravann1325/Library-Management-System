import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Book } from '../../types';
import { ApiService } from '../../services/api';
import { useSearch } from '../../hooks/useSearch';
import { SearchBar } from '../common/SearchBar';
import { Button } from '../common/Button';
import { Table } from '../common/Table';
import { StatusBadge } from '../common/StatusBadge';
import { AddBookForm } from './AddBookForm';

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const { searchQuery, setSearchQuery, filteredItems } = useSearch<Book>(
    books,
    ['title', 'author', 'isbn']
  );

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await ApiService.getBooks();
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleAddBook = async (bookData: any) => {
    try {
      const newBook = await ApiService.addBook(bookData);
      setBooks(prev => [...prev, newBook]);
      setShowAddForm(false);
    } catch (error) {
      console.error('Failed to add book:', error);
    }
  };

  const columns = [
    { header: 'Title', accessor: 'title' },
    { header: 'Author', accessor: 'author' },
    { header: 'ISBN', accessor: 'isbn' },
    {
      header: 'Status',
      accessor: (book: Book) => (
        <StatusBadge
          status={book.status}
          variant={book.status === 'available' ? 'success' : 'warning'}
        />
      )
    },
    {
      header: 'Actions',
      accessor: (book: Book) => (
        <Button variant="secondary" onClick={() => console.log('Edit book:', book.id)}>
          Edit
        </Button>
      )
    }
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Book Catalog</h1>
        <Button icon={Plus} onClick={() => setShowAddForm(true)}>
          Add Book
        </Button>
      </div>

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search books..."
      />

      <Table data={filteredItems} columns={columns} />

      {showAddForm && (
        <AddBookForm
          onClose={() => setShowAddForm(false)}
          onSubmit={handleAddBook}
        />
      )}
    </div>
  );
}