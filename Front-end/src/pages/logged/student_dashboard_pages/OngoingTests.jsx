import React, { useState } from 'react';
import { Clock, Users, BookOpen, Play, Calendar, AlertCircle } from 'lucide-react';
import { mockTests } from '../data/mockData';
import { format, differenceInDays, differenceInHours } from 'date-fns';

const OngoingTests = () => {
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
  };

  const handleCloseModal = () => {
    setSelectedTest(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Ongoing Tests</h1>
        <div className="text-sm text-gray-600">
          {tests.filter(test => test.isActive).length} active tests
        </div>
      </div>

      {/* Active Tests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.filter(test => test.isActive).map((test) => (
          <div key={test.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">{test.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{test.description}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(test.type)}`}>
                  {test.type}
                </span>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(test.difficulty)}`}>
                  {test.difficulty}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
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

            <div className="flex items-center justify-between mb-4">
              <div className="text-sm">
                <span className="text-gray-500">Time remaining:</span>
                <div className="font-medium text-orange-600">{getTimeRemaining(test.endDate)}</div>
              </div>
            </div>

            <button
              onClick={() => handleStartTest(test)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Play className="w-4 h-4" />
              <span>Start Test</span>
            </button>
          </div>
        ))}
      </div>

      {/* Test Instructions Modal */}
      {selectedTest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-800">Test Instructions</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">{selectedTest.title}</h4>
                <p className="text-gray-600 text-sm">{selectedTest.description}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Test Details</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Duration: {selectedTest.duration} minutes</li>
                  <li>• Total Questions: {selectedTest.totalQuestions}</li>
                  <li>• Difficulty: {selectedTest.difficulty}</li>
                  <li>• Type: {selectedTest.type}</li>
                  <li>• Attempts Allowed: {selectedTest.maxAttempts}</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-yellow-800 mb-1">Important Instructions</h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Once started, the timer cannot be paused</li>
                      <li>• You can navigate between questions freely</li>
                      <li>• Make sure you have a stable internet connection</li>
                      <li>• Submit the test before time runs out</li>
                      <li>• You cannot retake the test once submitted</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Starting ${selectedTest.title}...`);
                  handleCloseModal();
                }}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Start Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Test Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {tests.filter(t => t.type === 'technical').length}
            </div>
            <div className="text-sm text-gray-600">Technical Tests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {tests.filter(t => t.type === 'aptitude').length}
            </div>
            <div className="text-sm text-gray-600">Aptitude Tests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {tests.filter(t => t.type === 'reasoning').length}
            </div>
            <div className="text-sm text-gray-600">Reasoning Tests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {tests.filter(t => t.difficulty === 'hard').length}
            </div>
            <div className="text-sm text-gray-600">Hard Level</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingTests;