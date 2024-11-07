# Stage 1: Build the Angular app
FROM node:14 AS build

# Set working directory
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install Angular CLI and project dependencies
RUN npm install -g @angular/cli@12.0.1 && npm install

# Copy the entire project into the container
COPY . .

# Build the Angular app in production mode
RUN ng build --configuration production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the Angular build output to the Nginx HTML directory
COPY --from=build /app/dist/YOUR_PROJECT_NAME /usr/share/nginx/html

# Copy a custom Nginx configuration file if necessary
# (Optional) Uncomment the following line if you have a custom nginx.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
