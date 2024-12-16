import React, { useEffect, useState } from 'react';
import { Transaction } from '../../types';
import { ApiService } from '../../services/api';
import { Table } from '../common/Table';
import { StatusBadge } from '../common/StatusBadge';
import { SearchBar } from '../common/SearchBar';
import { useSearch } from '../../hooks/useSearch';
import { Button } from '../common/Button';
import { Plus } from 'lucide-react';

export default function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery, setSearchQuery, filteredItems } = useSearch<Transaction>(
    transactions,
    ['id', 'memberId', 'bookCopyId']
  );

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await ApiService.getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const columns = [
    { header: 'Transaction ID', accessor: 'id' },
    { header: 'Book Copy ID', accessor: 'bookCopyId' },
    { header: 'Member ID', accessor: 'memberId' },
    { header: 'Check Out Date', accessor: 'checkOutDate' },
    { header: 'Due Date', accessor: 'dueDate' },
    {
      header: 'Status',
      accessor: (transaction: Transaction) => (
        <StatusBadge
          status={transaction.status}
          variant={
            transaction.status === 'active'
              ? 'success'
              : transaction.status === 'overdue'
              ? 'danger'
              : 'info'
          }
        />
      ),
    },
    {
      header: 'Actions',
      accessor: (transaction: Transaction) => (
        <div className="space-x-2">
          {transaction.status === 'active' && (
            <Button
              variant="secondary"
              onClick={() => console.log('Return book:', transaction.id)}
            >
              Return Book
            </Button>
          )}
        </div>
      ),
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <Button icon={Plus} onClick={() => console.log('New transaction')}>
          New Transaction
        </Button>
      </div>

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search transactions..."
      />

      <Table data={filteredItems} columns={columns} />
    </div>
  );
}