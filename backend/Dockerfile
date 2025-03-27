FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Build TypeScript
RUN npm run build

# Expose the API port
EXPOSE 4000

# Start the application
CMD ["npm", "start"]