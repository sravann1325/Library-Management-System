import React from 'react';
import { BarChart3, BookOpen, Users, AlertCircle } from 'lucide-react';

const reports = [
  {
    id: 'overdue',
    title: 'Overdue Books',
    description: 'List of books that are currently overdue',
    icon: AlertCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    id: 'popular-books',
    title: 'Popular Books',
    description: 'Most frequently borrowed books',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 'active-members',
    title: 'Active Members',
    description: 'Members with most transactions',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    id: 'monthly-stats',
    title: 'Monthly Statistics',
    description: 'Overview of library activities this month',
    icon: BarChart3,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
];

export default function ReportList() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => {
          const Icon = report.icon;
          return (
            <div
              key={report.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => console.log(`Generate ${report.id} report`)}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${report.bgColor}`}>
                  <Icon className={`w-6 h-6 ${report.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {report.title}
                  </h3>
                  <p className="text-gray-600">{report.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}