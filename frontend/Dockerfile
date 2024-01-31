# Use lightweight server
FROM nginx:alpine

# Main folder -> NGINX's default public directory
WORKDIR /usr/share/nginx/html/

# Copy from my PC to the container
COPY dist/* .

# Expose port
EXPOSE 80
