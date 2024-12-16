// Simulated API service
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class ApiService {
  private static async simulateRequest<T>(data: T): Promise<T> {
    await delay(500); // Simulate network delay
    return data;
  }

  // Books API
  static async getBooks() {
    const books = [
      {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        isbn: '978-0743273565',
        publishedDate: '2004-09-30',
        genre: 'Fiction',
        status: 'available',
        condition: 'good',
        copies: [
          { id: '1-1', bookId: '1', status: 'available', condition: 'good', acquisitionDate: '2023-01-01' }
        ]
      },
      {
        id: '2',
        title: '1984',
        author: 'George Orwell',
        isbn: '978-0451524935',
        publishedDate: '1961-01-01',
        genre: 'Fiction',
        status: 'checked-out',
        condition: 'fair',
        copies: [
          { id: '2-1', bookId: '2', status: 'checked-out', condition: 'fair', acquisitionDate: '2023-02-15' }
        ]
      }
    ];
    return this.simulateRequest(books);
  }

  static async addBook(bookData: any) {
    // Simulate adding a book
    console.log('Adding book:', bookData);
    return this.simulateRequest({ id: Date.now().toString(), ...bookData });
  }

  // Members API
  static async getMembers() {
    const members = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        membershipId: 'MEM001',
        status: 'active',
        joinDate: '2023-01-01',
        expiryDate: '2024-01-01'
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '098-765-4321',
        membershipId: 'MEM002',
        status: 'active',
        joinDate: '2023-02-15',
        expiryDate: '2024-02-15'
      }
    ];
    return this.simulateRequest(members);
  }

  // Transactions API
  static async getTransactions() {
    const transactions = [
      {
        id: 'T1',
        bookCopyId: '1-1',
        memberId: '1',
        checkOutDate: '2024-03-01',
        dueDate: '2024-03-15',
        status: 'active'
      },
      {
        id: 'T2',
        bookCopyId: '2-1',
        memberId: '2',
        checkOutDate: '2024-02-15',
        dueDate: '2024-03-01',
        returnDate: '2024-02-28',
        status: 'returned'
      }
    ];
    return this.simulateRequest(transactions);
  }
}