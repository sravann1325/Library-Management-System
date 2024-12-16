import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import BookList from './components/books/BookList';
import MemberList from './components/members/MemberList';
import TransactionList from './components/transactions/TransactionList';
import ReportList from './components/reports/ReportList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/books" replace />} />
          <Route path="books" element={<BookList />} />
          <Route path="members" element={<MemberList />} />
          <Route path="transactions" element={<TransactionList />} />
          <Route path="reports" element={<ReportList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}