# Package.json Documentation

This document explains the contents and purpose of `package.json`.

## Project Information
- **Name**: eco-drive
- **Version**: 1.0.0
- **Description**: A sustainable car rental platform
- **Main Entry Point**: server.js

## Scripts
The following npm scripts are available:
- `npm start`: Start the application in production mode
- `npm run dev`: Start the application with nodemon for development
- `npm test`: Run tests using Jest
- `npm run build`: Build frontend assets using Webpack
- `npm run lint`: Lint the codebase using ESLint

## Dependencies
### Production Dependencies
- **express**: Web framework for Node.js
- **mysql2**: MySQL database driver
- **jsonwebtoken**: JWT implementation for authentication
- **bcryptjs**: Password hashing library
- **nodemailer**: Email sending library
- **dotenv**: Environment variables management
- **cors**: CORS middleware
- **express-validator**: Request validation middleware

### Development Dependencies
- **nodemon**: Auto-restarting server for development
- **jest**: Testing framework
- **eslint**: Code linting tool
- **webpack**: Module bundler
- **webpack-cli**: Command line interface for Webpack

## Requirements
- Node.js version >= 14.0.0

## Installation
1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file with required environment variables
4. Run `npm run dev` for development or `npm start` for production

## Development Guidelines
1. Use `npm run dev` during development for auto-reloading
2. Run tests with `npm test` before committing changes
3. Ensure code passes linting with `npm run lint`
4. Build frontend assets with `npm run build` before deployment 