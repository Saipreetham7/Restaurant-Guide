import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { Restaurant } from '../../types/Restaurant';
import React from 'react';

interface RestaurantCardProps {
  restaurant: Restaurant;
  compact?: boolean;
  pillStyle?: boolean;
}

const RestaurantCard = ({
  restaurant,
  compact = false,
  pillStyle = false,
}: RestaurantCardProps) => {
  if (pillStyle) {
    // Pill style card (matching screenshot)
    return (
      <Link
        to={`/restaurant/${restaurant.id}`}
        className="block bg-gray-800 rounded-lg overflow-hidden shadow-md hover:bg-gray-700 transition-colors mb-2"
      >
        <div className="flex flex-row p-2">
          {/* Image */}
          <div className="w-20 h-20 flex-shrink-0 overflow-hidden mr-3 relative">
            {restaurant.photos && restaurant.photos.length > 0 ? (
              <img
                src={restaurant.photos[0]}
                alt={restaurant.name}
                className="w-full h-full rounded-lg object-cover absolute inset-0"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-600 flex items-center justify-center rounded-lg">
                <span className="text-gray-300 text-xs">No image</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {' '}
            {/* min-width-0 ensures truncation works properly */}
            <h2 className="text-lg font-medium text-white mb-1 truncate">
              {restaurant.name}
            </h2>
            <div className="flex items-center mb-1">
              <FaStar className="text-yellow-400 mr-1 flex-shrink-0" />
              <span className="text-yellow-400 mr-3">
                {restaurant.rating.toFixed(1)}
              </span>
            </div>
            <div className="flex items-start mb-2">
              <FaMapMarkerAlt className="mt-0.5 mr-1 text-blue-400 flex-shrink-0 text-sm" />
              <span className="text-gray-300 text-sm truncate">
                {restaurant.address}
              </span>
            </div>
            <div className="flex items-center text-gray-400 text-xs overflow-hidden">
              <div className="truncate">
                {restaurant.types && restaurant.types.length > 0 ? (
                  <>
                    {restaurant.types.slice(0, 2).map((type, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <span className="mx-1">•</span>}
                        <span>{type.replace(/_/g, ' ')}</span>
                      </React.Fragment>
                    ))}
                    {restaurant.types.length > 3 && (
                      <>
                        <span className="mx-1">•</span>
                        <span>+{restaurant.types.length - 3} more</span>
                      </>
                    )}
                  </>
                ) : (
                  <span>No categories</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Original card style (not used in pill design)
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className={`block bg-white p-2 text-gray-950 rounded-lg overflow-hidden shadow-md hover:scale-102 hover:shadow-lg transition-shadow ${
        compact ? 'mb-2' : ''
      }`}
    >
      <div className={`flex ${compact ? 'flex-row' : 'flex-col'}`}>
        {/* Image */}
        <div
          className={`${compact ? 'w-24 h-24' : 'h-48'} overflow-hidden ${
            compact ? 'mr-3' : 'mb-3'
          }`}
        >
          {restaurant.photos && restaurant.photos.length > 0 ? (
            <img
              src={restaurant.photos[0]}
              alt={restaurant.name}
              className="w-full h-full rounded-lg object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-400 text-xs">No image</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`${compact ? 'flex-1 min-w-0' : 'p-3'}`}>
          <h2
            className={`${
              compact ? 'text-base' : 'text-xl'
            } font-semibold mb-1 text-dark truncate`}
          >
            {restaurant.name}
          </h2>
          <div className="flex items-center mb-1">
            <FaStar className="text-yellow-500 mr-1 text-sm flex-shrink-0" />
            <span className={`${compact ? 'text-sm' : ''}`}>
              {restaurant.rating.toFixed(1)}
            </span>
          </div>
          <div className="flex items-start text-gray-600">
            <FaMapMarkerAlt
              className={`mt-1 mr-1 text-primary flex-shrink-0 ${
                compact ? 'text-xs' : ''
              }`}
            />
            <span className={`${compact ? 'text-xs' : 'text-sm'} truncate`}>
              {restaurant.address}
            </span>
          </div>

          <div
            className={`${
              compact ? 'mt-1' : 'mt-3'
            } flex flex-wrap gap-1 overflow-hidden`}
          >
            {restaurant.types.slice(0, compact ? 2 : 3).map((type, index) => (
              <span
                key={index}
                className={`bg-gray-100 text-gray-800 ${
                  compact ? 'text-xs px-1 py-0' : 'text-xs px-2 py-1'
                } rounded whitespace-nowrap`}
              >
                {type.replace(/_/g, ' ')}
              </span>
            ))}
            {restaurant.types.length > (compact ? 2 : 3) && (
              <span className="text-xs text-gray-500 whitespace-nowrap">
                +{restaurant.types.length - (compact ? 2 : 3)} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
