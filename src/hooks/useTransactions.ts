import { useState, useEffect } from 'react';
import { Transaction } from '../types';
import { transactionService } from '../services/transactionService';

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await transactionService.getTransactions();
        setTransactions(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch transactions'));
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return {
    transactions,
    loading,
    error
  };
}