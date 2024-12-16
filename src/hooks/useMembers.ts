import { useState, useEffect } from 'react';
import { Member } from '../types';
import { memberService } from '../services/memberService';

export function useMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await memberService.getMembers();
        setMembers(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch members'));
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return {
    members,
    loading,
    error
  };
}