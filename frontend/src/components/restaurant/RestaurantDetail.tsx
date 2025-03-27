import { FaStar, FaPhone, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { Restaurant } from '../../types/Restaurant';

interface RestaurantDetailProps {
  restaurant: Restaurant;
}

const RestaurantDetail = ({ restaurant }: RestaurantDetailProps) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Image */}
        <div className="md:col-span-1 h-48 md:h-64 relative p-4">
          {restaurant.photos && restaurant.photos.length > 0 ? (
            <img
              src={restaurant.photos[0]}
              alt={restaurant.name}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center rounded-lg">
              <span className="text-gray-300">No image available</span>
            </div>
          )}
        </div>

        {/* Restaurant Details */}
        <div className="md:col-span-2 p-4">
          <div>
            <h1 className="text-2xl font-bold mb-3 truncate">
              {restaurant.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-4">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-semibold text-yellow-400">
                  {restaurant.rating.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4 text-gray-300">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-blue-400 flex-shrink-0" />
                <span className="truncate">{restaurant.address}</span>
              </div>
              {restaurant.phone && (
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-blue-400 flex-shrink-0" />
                  <span>{restaurant.phone}</span>
                </div>
              )}
              {restaurant.website && (
                <div className="flex items-center">
                  <FaGlobe className="mr-2 text-blue-400 flex-shrink-0" />
                  <a
                    href={restaurant.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline truncate"
                  >
                    {restaurant.website}
                  </a>
                </div>
              )}
            </div>

            {/* Restaurant Categories */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2 text-gray-400">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.types && restaurant.types.length > 0 ? (
                  restaurant.types.map((type, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                    >
                      {type.replace(/_/g, ' ')}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">No categories available</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
