// Common types used throughout the application
export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publishedDate: string;
  genre: string;
  status: 'available' | 'checked-out' | 'maintenance' | 'reserved';
  condition: 'new' | 'good' | 'fair' | 'poor';
  copies: BookCopy[];
}

export interface BookCopy {
  id: string;
  bookId: string;
  status: 'available' | 'checked-out' | 'maintenance';
  condition: 'new' | 'good' | 'fair' | 'poor';
  acquisitionDate: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  membershipId: string;
  status: 'active' | 'expired' | 'suspended';
  joinDate: string;
  expiryDate: string;
}

export interface Transaction {
  id: string;
  bookCopyId: string;
  memberId: string;
  checkOutDate: string;
  dueDate: string;
  returnDate?: string;
  status: 'active' | 'returned' | 'overdue';
  fine?: number;
}

export interface Reservation {
  id: string;
  bookId: string;
  memberId: string;
  requestDate: string;
  status: 'pending' | 'fulfilled' | 'cancelled';
}