import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search...' }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border rounded-lg"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
    </div>
  );
}