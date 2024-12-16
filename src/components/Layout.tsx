import React from 'react';
import { BookOpen, Users, RepeatIcon, BarChart3 } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const navItems = [
  { icon: BookOpen, label: 'Books', path: '/books' },
  { icon: Users, label: 'Members', path: '/members' },
  { icon: RepeatIcon, label: 'Transactions', path: '/transactions' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8" />
              <span className="font-bold text-xl">LibraryMS</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white shadow-lg h-[calc(100vh-4rem)] fixed">
          <nav className="p-4 space-y-2">
            {navItems.map(({ icon: Icon, label, path }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex-1 ml-64 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}