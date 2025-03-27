import { Restaurant } from '../../types/Restaurant';
import RestaurantCard from './RestaurantCard';
import Loading from '../common/Loading';
import Error from '../common/Error';

interface RestaurantListProps {
  restaurants: Restaurant[];
  loading: boolean;
  error: string | null;
  compact?: boolean;
  pillStyle?: boolean;
}

const RestaurantList = ({
  restaurants,
  loading,
  error,
  compact = false,
  pillStyle = false,
}: RestaurantListProps) => {
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  if (restaurants.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-warning text-lg">No restaurants found.</p>
      </div>
    );
  }

  // For pill style, we want a single column of items
  const gridColumns = pillStyle
    ? 'grid-cols-1 md:grid-cols-2'
    : compact
    ? 'grid-cols-1'
    : 'grid-cols-1 md:grid-cols-2';

  return (
    <div className={`grid ${gridColumns} gap-3`}>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          compact={compact}
          pillStyle={pillStyle}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
