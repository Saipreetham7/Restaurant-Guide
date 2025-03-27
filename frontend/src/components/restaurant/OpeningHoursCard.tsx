import React from 'react';
import { FaClock } from 'react-icons/fa';

interface OpeningHoursProps {
  hours: string[];
}

const OpeningHoursCard: React.FC<OpeningHoursProps> = ({ hours }) => {
  if (!hours || hours.length === 0) {
    return null;
  }

  const today = new Date().getDay();
  // Adjust index since Google's weekday_text usually starts with Sunday as 0
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <div className="bg-white text-gray-950 rounded-lg shadow-md overflow-hidden mb-8">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaClock className="mr-2 text-primary" />
          Opening Hours
        </h2>

        <div className="space-y-2">
          {hours.map((hour, index) => (
            <div
              key={index}
              className={`p-2 ${
                index === todayIndex
                  ? 'bg-opacity-10 rounded-md border-l-4 border-primary'
                  : ''
              }`}
            >
              <p className={`${index === todayIndex ? 'text-primary' : ''}`}>
                {index === todayIndex && (
                  <span className="text-primary mr-2">Today:</span>
                )}
                {hour}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpeningHoursCard;
