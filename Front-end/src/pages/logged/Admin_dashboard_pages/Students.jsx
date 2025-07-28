import React, { useState } from 'react';
import { Search, Filter, Download, UserPlus, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const students = [
    {
      id: 1,
      name: 'Sarah Smith',
      email: 'sarah.smith@email.com',
      phone: '+1 234-567-8901',
      location: 'New York, NY',
      joinDate: '2024-01-15',
      testsCompleted: 12,
      avgScore: 95,
      status: 'active',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '+1 234-567-8902',
      location: 'Los Angeles, CA',
      joinDate: '2024-01-12',
      testsCompleted: 10,
      avgScore: 92,
      status: 'active',
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Emily Brown',
      email: 'emily.brown@email.com',
      phone: '+1 234-567-8903',
      location: 'Chicago, IL',
      joinDate: '2024-01-10',
      testsCompleted: 8,
      avgScore: 89,
      status: 'inactive',
      lastActive: '1 week ago'
    },
    {
      id: 4,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 234-567-8904',
      location: 'Houston, TX',
      joinDate: '2024-01-08',
      testsCompleted: 15,
      avgScore: 85,
      status: 'active',
      lastActive: '30 minutes ago'
    },
    {
      id: 5,
      name: 'Alex Wilson',
      email: 'alex.wilson@email.com',
      phone: '+1 234-567-8905',
      location: 'Phoenix, AZ',
      joinDate: '2024-01-05',
      testsCompleted: 9,
      avgScore: 83,
      status: 'pending',
      lastActive: '3 days ago'
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || student.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    const statusClasses = {
      active: 'bg-green-100 text-green-700',
      inactive: 'bg-gray-100 text-gray-700',
      pending: 'bg-yellow-100 text-yellow-700'
    };
    return statusClasses[status] || 'bg-gray-100 text-gray-700';
  };

  const getPerformanceBadge = (score) => {
    if (score >= 90) return 'bg-green-100 text-green-700';
    if (score >= 80) return 'bg-blue-100 text-blue-700';
    if (score >= 70) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">Students Management</h1>
          <p className="text-text-secondary">Manage and track student progress and information</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <button className="btn-outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="btn-primary">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Student
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Total Students</p>
              <h3 className="text-2xl font-bold text-text-primary">1,234</h3>
            </div>
            <div className="p-3 rounded-lg bg-primary-50">
              <UserPlus className="w-6 h-6 text-primary-700" />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Active Students</p>
              <h3 className="text-2xl font-bold text-text-primary">1,089</h3>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <UserPlus className="w-6 h-6 text-green-700" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">New This Month</p>
              <h3 className="text-2xl font-bold text-text-primary">145</h3>
            </div>
            <div className="p-3 rounded-lg bg-secondary-50">
              <Calendar className="w-6 h-6 text-secondary-700" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Avg. Performance</p>
              <h3 className="text-2xl font-bold text-text-primary">87%</h3>
            </div>
            <div className="p-3 rounded-lg bg-accent-50">
              <UserPlus className="w-6 h-6 text-accent-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search students by name or email..."
                className="form-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              className="form-select"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All Students</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
            <button className="btn-outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <div key={student.id} className="card hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{student.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{student.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(student.status)}`}>
                    {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className={`px-2 py-1 rounded text-xs font-medium ${getPerformanceBadge(student.avgScore)}`}>
                  {student.avgScore}% avg
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-text-secondary">
                <Mail className="w-4 h-4 mr-2" />
                <span className="truncate">{student.email}</span>
              </div>
              <div className="flex items-center text-sm text-text-secondary">
                <Phone className="w-4 h-4 mr-2" />
                <span>{student.phone}</span>
              </div>
              <div className="flex items-center text-sm text-text-secondary">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{student.location}</span>
              </div>
              <div className="flex items-center text-sm text-text-secondary">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Joined {student.joinDate}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center text-sm">
                <span className="text-text-secondary">Tests Completed</span>
                <span className="font-semibold text-text-primary">{student.testsCompleted}</span>
              </div>
              <div className="flex justify-between items-center text-sm mt-2">
                <span className="text-text-secondary">Last Active</span>
                <span className="font-semibold text-text-primary">{student.lastActive}</span>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="btn-outline flex-1 text-sm py-2">View Profile</button>
              <button className="btn-primary flex-1 text-sm py-2">Send Message</button>
            </div>
          </div>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary text-lg">No students found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Students;