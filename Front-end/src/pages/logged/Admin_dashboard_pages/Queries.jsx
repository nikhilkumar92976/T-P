import React, { useState } from 'react';
import { Send, Search, Filter, Archive, Star, Reply, MoreVertical } from 'lucide-react';

const Queries = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const messages = [
    {
      id: 1,
      student: 'Sarah Smith',
      subject: 'Question about JavaScript Test',
      preview: 'Hi, I had a question about the closure concept in the recent JavaScript test...',
      content: 'Hi, I had a question about the closure concept in the recent JavaScript test. Could you please explain why my answer was marked incorrect? I thought I understood the concept but apparently not. Here\'s what I answered: "A closure is a function that has access to variables from its outer scope." Thank you for your help!',
      timestamp: '2 hours ago',
      status: 'unread',
      priority: 'high',
      category: 'academic'
    },
    {
      id: 2,
      student: 'Mike Johnson',
      subject: 'Test Schedule Inquiry',
      preview: 'Could you please let me know when the next aptitude test will be scheduled?',
      content: 'Could you please let me know when the next aptitude test will be scheduled? I want to make sure I prepare adequately. Also, will there be any study materials provided beforehand?',
      timestamp: '4 hours ago',
      status: 'read',
      priority: 'medium',
      category: 'schedule'
    },
    {
      id: 3,
      student: 'Emily Brown',
      subject: 'Technical Issue with Platform',
      preview: 'I\'m experiencing some technical difficulties accessing the coding test section...',
      content: 'I\'m experiencing some technical difficulties accessing the coding test section. Every time I try to submit my code, I get an error message. This has happened multiple times now. Could you please help me resolve this issue?',
      timestamp: '6 hours ago',
      status: 'unread',
      priority: 'urgent',
      category: 'technical'
    },
    {
      id: 4,
      student: 'John Doe',
      subject: 'Request for Score Review',
      preview: 'I would like to request a review of my recent verbal test score...',
      content: 'I would like to request a review of my recent verbal test score. I believe there might have been an error in the grading. I\'m particularly concerned about questions 15-20 where I feel my answers were correct but were marked wrong.',
      timestamp: '1 day ago',
      status: 'replied',
      priority: 'medium',
      category: 'academic'
    },
    {
      id: 5,
      student: 'Alex Wilson',
      subject: 'Study Materials Request',
      preview: 'Can you recommend some additional study materials for the upcoming coding test?',
      content: 'Can you recommend some additional study materials for the upcoming coding test? I want to make sure I\'m well-prepared, especially for data structures and algorithms. Any specific books or online resources you\'d recommend?',
      timestamp: '2 days ago',
      status: 'read',
      priority: 'low',
      category: 'resources'
    }
  ];

  const filteredMessages = messages.filter(message =>
    message.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-600 bg-red-50';
      case 'high':
        return 'text-orange-600 bg-orange-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'unread':
        return <div className="w-2 h-2 bg-primary-700 rounded-full"></div>;
      case 'read':
        return <div className="w-2 h-2 bg-gray-300 rounded-full"></div>;
      case 'replied':
        return <Reply className="w-4 h-4 text-green-600" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'academic':
        return 'bg-primary-100 text-primary-700';
      case 'technical':
        return 'bg-red-100 text-red-700';
      case 'schedule':
        return 'bg-secondary-100 text-secondary-700';
      case 'resources':
        return 'bg-accent-100 text-accent-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleReply = () => {
    if (replyText.trim()) {
      console.log('Sending reply:', replyText);
      setReplyText('');
      // Here you would typically send the reply to your backend
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">Messages</h1>
          <p className="text-text-secondary">Manage student queries and communications</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <button className="btn-outline">
            <Archive className="w-4 h-4 mr-2" />
            Archive
          </button>
          <button className="btn-primary">
            <Send className="w-4 h-4 mr-2" />
            Compose
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Total Messages</p>
              <h3 className="text-2xl font-bold text-text-primary">248</h3>
            </div>
            <div className="p-3 rounded-lg bg-primary-50">
              <Send className="w-6 h-6 text-primary-700" />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Unread</p>
              <h3 className="text-2xl font-bold text-text-primary">23</h3>
            </div>
            <div className="p-3 rounded-lg bg-red-50">
              <Star className="w-6 h-6 text-red-700" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Urgent</p>
              <h3 className="text-2xl font-bold text-text-primary">5</h3>
            </div>
            <div className="p-3 rounded-lg bg-orange-50">
              <Filter className="w-6 h-6 text-orange-700" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-1">Response Rate</p>
              <h3 className="text-2xl font-bold text-text-primary">94%</h3>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <Reply className="w-6 h-6 text-green-700" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Messages List */}
        <div className="lg:col-span-1">
          <div className="card">
            {/* Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="form-input pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Message List */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessage(message)}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors duration-200 ${
                    selectedMessage?.id === message.id
                      ? 'border-primary-300 bg-primary-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  } ${message.status === 'unread' ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(message.status)}
                      <span className="font-medium text-text-primary truncate">{message.student}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(message.priority)}`}>
                      {message.priority}
                    </span>
                  </div>
                  <h4 className="font-medium text-sm text-text-primary mb-1 truncate">{message.subject}</h4>
                  <p className="text-xs text-text-secondary line-clamp-2">{message.preview}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(message.category)}`}>
                      {message.category}
                    </span>
                    <span className="text-xs text-gray-400">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          <div className="card">
            {selectedMessage ? (
              <div>
                {/* Message Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div>
                    <h2 className="text-xl font-bold text-text-primary">{selectedMessage.subject}</h2>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-text-secondary">From: {selectedMessage.student}</span>
                      <span className="text-sm text-gray-400">{selectedMessage.timestamp}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(selectedMessage.priority)}`}>
                        {selectedMessage.priority}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                {/* Message Content */}
                <div className="py-6">
                  <p className="text-text-primary leading-relaxed">{selectedMessage.content}</p>
                </div>

                {/* Reply Section */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-text-primary mb-3">Reply</h3>
                  <div className="space-y-4">
                    <textarea
                      className="form-input h-32"
                      placeholder="Type your reply here..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <div className="flex justify-end space-x-3">
                      <button className="btn-outline">Save Draft</button>
                      <button className="btn-primary" onClick={handleReply}>
                        <Send className="w-4 h-4 mr-2" />
                        Send Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Send className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-text-primary mb-2">Select a Message</h3>
                <p className="text-text-secondary">Choose a message from the list to view and reply</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queries;