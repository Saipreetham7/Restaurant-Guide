import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PhotoCarouselProps {
  photos: string[];
  restaurantName: string;
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({
  photos,
  restaurantName,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 4;

  // Calculate if we can navigate
  const canGoBack = startIndex > 0;
  const canGoForward = startIndex + imagesPerPage < photos.length;

  // Handler functions to adjust startIndex
  const goToPrevious = () => {
    if (canGoBack) {
      setStartIndex(startIndex - 1);
    }
  };

  const goToNext = () => {
    if (canGoForward) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="relative">
      {/* Title */}
      <h2 className="text-xl font-bold text-white mb-3">Photos</h2>

      {/* Main Carousel Container */}
      <div className="relative overflow-hidden px-8">
        {/* All images rendered in one row */}
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${(startIndex * 100) / imagesPerPage}%)`,
          }}
        >
          {photos.map((photo, index) => (
            <div key={`photo-${index}`} className="w-1/4 px-2 flex-shrink-0">
              <div className="aspect-square rounded-lg overflow-hidden group">
                <img
                  src={photo}
                  alt={`${restaurantName} photo ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          disabled={!canGoBack}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 transition-all duration-200 ${
            !canGoBack ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
          aria-label="Previous"
        >
          <FaChevronLeft size={16} className="text-gray-800" />
        </button>

        <button
          onClick={goToNext}
          disabled={!canGoForward}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 transition-all duration-200 ${
            !canGoForward
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-100'
          }`}
          aria-label="Next"
        >
          <FaChevronRight size={16} className="text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default PhotoCarousel;
