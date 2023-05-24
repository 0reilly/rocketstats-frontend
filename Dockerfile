# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install all dependencies
RUN npm install

# Install Tailwind CSS
RUN npm install tailwindcss@latest postcss@latest autoprefixer@latest

# Copy the rest of your app's source code to the working directory
COPY . .

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start"]
