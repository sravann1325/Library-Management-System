import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Member } from '../../types';
import { ApiService } from '../../services/api';
import { useSearch } from '../../hooks/useSearch';
import { SearchBar } from '../common/SearchBar';
import { Button } from '../common/Button';
import { Table } from '../common/Table';
import { StatusBadge } from '../common/StatusBadge';

export default function MemberList() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery, setSearchQuery, filteredItems } = useSearch<Member>(
    members,
    ['name', 'email', 'membershipId']
  );

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await ApiService.getMembers();
        setMembers(data);
      } catch (error) {
        console.error('Failed to fetch members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Membership ID', accessor: 'membershipId' },
    {
      header: 'Status',
      accessor: (member: Member) => (
        <StatusBadge
          status={member.status}
          variant={member.status === 'active' ? 'success' : 'danger'}
        />
      )
    },
    {
      header: 'Actions',
      accessor: (member: Member) => (
        <Button variant="secondary" onClick={() => console.log('Edit member:', member.id)}>
          Edit
        </Button>
      )
    }
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Member Directory</h1>
        <Button icon={Plus} onClick={() => console.log('Add new member')}>
          Add Member
        </Button>
      </div>

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search members..."
      />

      <Table data={filteredItems} columns={columns} />
    </div>
  );
}