# VERSION 2
# Use NGINX as a lightweight server
FROM nginx:alpine

# Set the working directory to NGINX's default public directory
WORKDIR /usr/share/nginx/html/

# Copy the Angular production build from the local machine to the container
COPY dist/* .


EXPOSE 80

# EXPOSE 80



# Nginx configuration
# COPY default.conf /etc/nginx/conf.d/default.conf



#  Run NGINX as a non-root user
# RUN chown -R nginx:nginx /usr/share/nginx/html && \
#     chmod -R 755 /usr/share/nginx/html && \
#     sed -i 's/listen  .*/listen 8080;/g' /etc/nginx/conf.d/default.conf && \
#     sed -i '/user  nginx;/d' /etc/nginx/nginx.conf
# USER nginx




# //////////////// VERSION 1
# # Use an official Node runtime as a parent image
# FROM node:18

# # Set the working directory to /app
# WORKDIR /app

# # Copy package.json and package-lock.json to /app
# COPY package*.json ./

# # Install Angular CLI globally
# RUN npm install -g @angular/cli@16

# # Install project dependencies
# RUN npm install
# # Build
# RUN npm run build


# # Copy the current directory contents into the container at /app
# COPY . .

# # Make port 4200 available to the world outside this container
# EXPOSE 4200

# # Define the command to run your Angular app when the container starts
# CMD ["ng", "serve", "--host", "0.0.0.0"]
