import { Transaction } from '../types';
import { ApiService } from './api';

export const transactionService = {
  getTransactions: () => ApiService.getTransactions(),
  
  // Add more transaction-related methods here
};