export interface Restaurant {
  id: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  photos: string[];
  website?: string;
  latitude: number;
  longitude: number;
  priceLevel?: number; // Add this for price level (0-4 from Google Places API)
  openingHours?: string[]; 
  // Add other fields as needed
}

export interface RestaurantParams {
  id: string;
}
