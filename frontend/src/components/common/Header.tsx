import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <FaUtensils className="text-white mr-2" />
            <span className="text-3xl font-bold text-white">FeastFinder</span>
          </div>
          <div className="ml-4 flex items-center">
            <span className="text-purple-400 italic border-l border-gray-700 text-sm pl-3 mt-1.5">
              Your map to memorable meals
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
