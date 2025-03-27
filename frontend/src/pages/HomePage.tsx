import { useState } from 'react';
import { useRestaurants } from '../hooks/useRestaurants';
import RestaurantList from '../components/restaurant/RestaurantList';
import { FaSearch, FaUtensils } from 'react-icons/fa';
import RestaurantMap from '../components/restaurant/RestaurantMap';

const HomePage = () => {
  const { restaurants, loading, error } = useRestaurants();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.types.some((type) =>
        type.replace(/_/g, ' ').toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="animate__animated animate__fadeInUp">
            <p className="text-xl mt-6 mb-3">
              Find the best places to eat in your area
            </p>
            <div className="max-w-xl mx-auto relative ring-2 rounded-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search restaurants ..."
                className="w-full pl-10 pr-4 py-2 rounded-full text-white-800 focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 flex-grow">
        <div className="flex items-center mb-4">
          <FaUtensils className="mr-2 text-white" />
          <h2 className="text-xl font-bold text-white">
            {searchTerm ? 'Search Results' : 'All Restaurants'}
          </h2>
        </div>

        {/* Restaurant content with map and list side by side */}
        <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-220px)]">
          {/* Map View (Left side) */}
          <div className="lg:w-1/2 h-full rounded-lg overflow-hidden shadow-md">
            <RestaurantMap restaurants={filteredRestaurants} height="100%" />
          </div>

          {/* Restaurant List (Right side) - Scrollable */}
          <div className="lg:w-1/2 h-full overflow-hidden">
            <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
              <RestaurantList
                restaurants={filteredRestaurants}
                loading={loading}
                error={error}
                pillStyle={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
