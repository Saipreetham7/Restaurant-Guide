import { useParams, Link } from 'react-router-dom';
import { useRestaurantDetail } from '../hooks/useRestaurants';
import RestaurantDetail from '../components/restaurant/RestaurantDetail';
import RestaurantMap from '../components/restaurant/RestaurantMap';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import { FaArrowLeft } from 'react-icons/fa';
import PhotoCarousel from '../components/restaurant/PhotoCarousel';

const RestaurantDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { restaurant, loading, error } = useRestaurantDetail(id || '');

  return (
    <div className="container mx-auto mt-8 rounded-2xl px-4 py-4 min-h-screen bg-gray-900">
      <Link
        to="/"
        className="inline-flex items-center text-xl font-medium text-white hover:text-blue-400 transition-colors mb-6 mt-2"
      >
        <FaArrowLeft className="mr-2" />
        Back to all restaurants
      </Link>

      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : restaurant ? (
        <div className="space-y-6">
          {/* Main Restaurant Details */}
          <RestaurantDetail restaurant={restaurant} />

          {/* Map and Opening Hours Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Map Section */}
            <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-3">Location</h2>
                <div className="rounded-lg overflow-hidden h-64">
                  <RestaurantMap restaurant={restaurant} />
                </div>
              </div>
            </div>

            {/* Opening Hours Section */}
            {restaurant.openingHours && (
              <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-3">Opening Hours</h2>
                  <div className="space-y-2">
                    {restaurant.openingHours.map((hour, index) => {
                      // Extract day name and hours
                      const parts = hour.split(':');
                      const day = parts[0];
                      const hourText = parts.slice(1).join(':');

                      // Check if today
                      const today = new Date().getDay();
                      const weekdays = [
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                      ];
                      const isToday = day.includes(weekdays[today]);

                      return (
                        <div
                          key={index}
                          className={`flex justify-between py-1 ${
                            isToday ? 'text-blue-400' : 'text-gray-300'
                          }`}
                        >
                          <span>{day}</span>
                          <span>{hourText}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Photo Gallery as Carousel */}
          {restaurant.photos && restaurant.photos.length > 1 && (
            <div className="bg-gray-900 mt-4 rounded-lg overflow-hidden">
              <div className="px-4 pb-4">
                <PhotoCarousel
                  photos={restaurant.photos}
                  restaurantName={restaurant.name}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Restaurant not found.</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
