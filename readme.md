# Restaurant Guide Application

A full-stack application that serves as a guide-like website introducing users to various restaurants. The application has a user-friendly frontend built with React and TypeScript, and a structured backend that interacts with the Google Places API.

<p><b>Here is a recored video of Application</b></p>
https://github.com/user-attachments/assets/da51ecfc-7739-4fca-a57c-22fc722683f6



## 📋 Features

- Overview page displaying a list of restaurants with search functionality
- Detail view for each restaurant with information, photos, and location
- Interactive map showing restaurant locations using Leaflet
- Responsive design that works on both desktop and mobile devices
- Containerized application using Docker for easy deployment

## 🏗️ Tech Stack

### Backend
- TypeScript
- Fastify
- Google Places API
- Docker

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Router
- Leaflet Maps
- Docker

## 🛠️ Project Structure

```
restaurant-guide/
├── backend/                # Backend code
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # Business logic & API calls
│   │   ├── types/          # TypeScript interfaces
│   │   └── index.ts        # Application entry point
│   ├── .env                # Environment variables
│   ├── Dockerfile          # Docker configuration
│   └── package.json
│
├── frontend/               # Frontend code
│   ├── src/
│   │   ├── assets/         # Static assets
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service modules
│   │   ├── types/          # TypeScript interfaces
│   │   ├── App.tsx         # Main component
│   │   └── main.tsx        # Application entry point
│   ├── .env.local          # Environment variables
│   ├── Dockerfile          # Docker configuration
│   └── package.json
│
├── docker-compose.yml      # Docker Compose configuration
├── .env.backend            # Backend environment variables for Docker
├── .env.frontend           # Frontend environment variables for Docker
└── README.md               # Project documentation
```

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Docker and Docker Compose (for containerized deployment)
- Google Places API key

### Installation & Setup

#### Method 1: Running Locally (Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saipreetham7/restaurant-guide.git
   cd restaurant-guide
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

3. **Create a `.env` file in the backend directory**
   ```
   GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
   DEFAULT_LOCATION=59.3293,18.0686
   DEFAULT_RADIUS=5000
   ```

4. **Start the backend server**
   ```bash
   npm run dev
   ```

5. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

6. **Create a `.env.local` file in the frontend directory**
   ```
   VITE_API_URL=http://localhost:4000
   ```

7. **Start the frontend development server**
   ```bash
   npm run dev
   ```

8. **Open your browser** and navigate to `http://localhost:5173`

#### Method 2: Using Docker (Production)

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saipreetham7/restaurant-guide.git
   cd restaurant-guide
   ```

2. **Create environment files**

   Create `.env.backend` file:
   ```
   GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
   DEFAULT_LOCATION=59.3293,18.0686
   DEFAULT_RADIUS=5000
   ```

   Create `.env.frontend` file:
   ```
   VITE_API_URL=http://backend:4000
   ```

3. **Build and start the containers**
   ```bash
   docker-compose up -d
   ```

4. **Open your browser** and navigate to `http://localhost`

### Docker Images

You can also pull the pre-built Docker images from Docker Hub:

```bash
docker pull saipreetham7/restaurant-guide-frontend:1.0
docker pull saipreetham7/restaurant-guide-backend:1.0
```

## 📱 Application Features in Detail

### Restaurant Listing
- Displays restaurants in a responsive grid layout
- Shows key information including name, rating, and location
- Search functionality to filter restaurants by name

### Restaurant Details
- Comprehensive view of restaurant information
- Photo gallery with carousel navigation
- Opening hours with current day highlighted
- Map showing the restaurant's exact location

### User Interface
- Clean, responsive design that works on all devices
- Intuitive navigation with breadcrumbs
- Modern design with animations and transitions

## 🧑‍💻 Development

### Backend Development

The backend is built with Fastify and TypeScript, focusing on providing a clean API for the frontend to consume.

Key endpoints:
- `GET /restaurants` - Returns a list of restaurants
- `GET /restaurants/:id` - Returns details for a specific restaurant

### Frontend Development

The frontend is built with React, TypeScript, and Vite, focusing on a responsive and intuitive user experience.

Key components:
- `HomePage` - Main page displaying the restaurant list and map
- `RestaurantDetailPage` - Detailed view of a single restaurant
- `RestaurantMap` - Interactive map component

## 🚢 Deployment

### Docker Deployment

The application is containerized using Docker, making it easy to deploy to any environment.

1. Pull the Docker images:
   ```bash
   docker pull saipreetham7/restaurant-guide-frontend:1.0
   docker pull saipreetham7/restaurant-guide-backend:1.0
   ```

2. Create a `docker-compose.yml` file:
   ```yaml
   version: '3.8'

   services:
     backend:
       image: saipreetham7/restaurant-guide-backend:1.0
       env_file:
         - .env.backend
       ports:
         - "4000:4000"

     frontend:
       image: saipreetham7/restaurant-guide-frontend:1.0
       env_file:
         - .env.frontend
       ports:
         - "80:80"
       depends_on:
         - backend
   ```

3. Start the services:
   ```bash
   docker-compose up -d
   ```

### Environment Variables

#### Backend Environment Variables:
- `GOOGLE_PLACES_API_KEY` - Your Google Places API key
- `DEFAULT_LOCATION` - Default coordinates for restaurant search
- `DEFAULT_RADIUS` - Default search radius in meters

#### Frontend Environment Variables:
- `VITE_API_URL` - URL of the backend API
