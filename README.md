# Library Management System

A modern, web-based library management system built with React, TypeScript, and Tailwind CSS. This system helps librarians efficiently manage books, members, transactions, and generate reports.

![Library Management System](https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000)

## Features

### 📚 Book Management
- Comprehensive book catalog with detailed information
- Track multiple copies of books
- Monitor book conditions and availability
- Easy-to-use book addition and editing interface

### 👥 Member Management
- Member directory with contact information
- Membership status tracking
- Active/expired membership handling
- Member activity history

### 🔄 Transaction Processing
- Book check-out and return processing
- Due date tracking
- Overdue notifications
- Transaction history

### 📊 Reporting
- Overdue books report
- Popular books analysis
- Active members statistics
- Monthly activity overview

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Development**: Vite

## Project Structure

```
src/
├── components/
│   ├── books/
│   │   ├── AddBookForm.tsx
│   │   └── BookList.tsx
│   ├── members/
│   │   └── MemberList.tsx
│   ├── transactions/
│   │   └── TransactionList.tsx
│   ├── reports/
│   │   └── ReportList.tsx
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── SearchBar.tsx
│   │   ├── StatusBadge.tsx
│   │   └── Table.tsx
│   └── Layout.tsx
├── services/
│   ├── api.ts
│   ├── bookService.ts
│   ├── memberService.ts
│   └── transactionService.ts
├── hooks/
│   ├── useBooks.ts
│   ├── useMembers.ts
│   ├── useSearch.ts
│   └── useTransactions.ts
├── types/
│   └── index.ts
└── App.tsx
```

## Getting Started

1. **Clone the repository**

```bash
git clone [repository-url]
cd library-management-system
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

### Code Organization

- **Components**: Reusable UI components
- **Services**: API and data management
- **Hooks**: Custom React hooks for shared logic
- **Types**: TypeScript type definitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vitejs.dev/)