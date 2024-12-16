import { useState, useCallback } from 'react';

export function useSearch<T>(items: T[], searchFields: (keyof T)[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useCallback(() => {
    if (!searchQuery.trim()) return items;
    
    return items.filter(item => 
      searchFields.some(field => 
        String(item[field]).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [items, searchQuery, searchFields]);

  return {
    searchQuery,
    setSearchQuery,
    filteredItems: filteredItems()
  };
}