const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">Restaurant Guide</h3>
            <p className="text-gray-300">
              Discover the best dining options in your area
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 mt-4 md:mt-0">
              Quick Links
            </h4>
            <ul>
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Restaurant Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
