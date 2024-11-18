# Stage 1: Build the Angular app
FROM node:14 AS build

WORKDIR /app

# Clone your GitHub repository
# Replace with your repository's URL
RUN git clone https://github.com/akrem1998/TpAchatProjectFront .

# Install Angular CLI and dependencies
COPY package*.json ./
RUN npm install -g @angular/cli@12.0.1 && npm install

# Copy project files and build the app
COPY . .
RUN ng build --configuration production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY --from=build /app/dist/crudtuto-Front /usr/share/nginx/html

# Expose port 40
EXPOSE 4200

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
