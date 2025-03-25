# Configuration Documentation

This document explains the configuration settings in `config.json`.

## Database Configuration
The `database` section contains settings for MySQL database connection:
- `host`: The host address for the MySQL database connection (default: "localhost")
- `user`: Database user credentials
- `password`: Database password
- `database`: Name of the database to connect to

## Server Configuration
The `server` section contains settings for the Node.js server:
- `port`: Port number for the server to listen on (default: 3000)
- `mode`: Environment mode ("development" or "production")

## JWT Configuration
The `jwt` section contains settings for JSON Web Token authentication:
- `secret`: Secret key used for token signing
- `expiresIn`: Token expiration time in hours (default: "24h")

## Email Configuration
The `email` section contains settings for email notifications:
- `host`: SMTP server host (default: "smtp.gmail.com")
- `port`: SMTP server port (default: 587)
- `user`: Email service credentials
- `password`: Email service password

## Security Notes
1. Never commit the actual `config.json` file with real credentials to version control
2. Use environment variables for sensitive information in production
3. Keep the JWT secret key secure and unique for each environment
4. Regularly rotate passwords and update security credentials 