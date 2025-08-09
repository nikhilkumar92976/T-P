import React, { useState, } from 'react';
import { Clock, Users, BookOpen, Play, Calendar, AlertCircle } from 'lucide-react';
import { mockTests } from '../../../data/mockData';
import { format, differenceInDays, differenceInHours } from 'date-fns';
import { useNavigate } from 'react-router-dom';
const OngoingTests = () => {
  const navigate = useNavigate()
  const [tests] = useState(mockTests);
  const [selectedTest, setSelectedTest] = useState(null);

  const getTimeRemaining = (endDate) => {
    const now = new Date();
    const days = differenceInDays(endDate, now);
    const hours = differenceInHours(endDate, now) % 24;

    if (days > 0) {
      return `${days}d ${hours}h remaining`;
    } else if (hours > 0) {
      return `${hours}h remaining`;
    } else {
      return 'Ending soon';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'technical':
        return 'bg-blue-100 text-blue-800';
      case 'aptitude':
        return 'bg-purple-100 text-purple-800';
      case 'reasoning':
        return 'bg-green-100 text-green-800';
      case 'mixed':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStartTest = (test) => {
    setSelectedTest(test);
    navigate("/test/comprehension")
  };

  const handleCloseModal = () => {
    setSelectedTest(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Ongoing Tests</h1>
        <div className="text-sm text-gray-600">
          {tests.filter(test => test.isActive).length} active tests
        </div>
      </div>

      {/* Active Tests Grid */}
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {tests.filter(test => test.isActive).map((test) => (
          <div key={test.id} className="border border-sky-400 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h5 className="text-md font-medium text-sky-300 mb-2">{test.title}</h5>
                <p className="text-gray-600 text-sm ">{test.description}</p>
              </div>
            </div>

            <div className="space-y-1 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>{test.duration} minutes</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>{test.totalQuestions} questions</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                <span>{test.maxAttempts} attempts allowed</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Ends: {format(test.endDate, 'MMM dd, yyyy')}</span>
              </div>
            </div>


            <button
              onClick={() => handleStartTest(test)}
              className="w-full top-full flex items-center justify-center space-x-2 px-4 py-2 border border-sky-800 text-sky-400 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Play className="w-4 h-4" />
              <span>Start Test</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingTests;