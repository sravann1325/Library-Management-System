import { Member } from '../types';
import { ApiService } from './api';

export const memberService = {
  getMembers: () => ApiService.getMembers(),
  
  // Add more member-related methods here
};