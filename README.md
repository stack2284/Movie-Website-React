# Movie Website - React

A modern and responsive movie website built with React, featuring a backend powered by Node.js and Express. This project allows users to explore movies, manage favorites, and more.

## Features

### Frontend
- **React**: Built with React for a dynamic and interactive user experience.
- **Vite**: Fast development and build tool.
- **Responsive Design**: Optimized for all screen sizes.
- **Components**:
  - Carousel for showcasing movies.
  - Hero section for featured content.
  - Movie cards with detailed information.
  - Navigation bar for seamless browsing.
- **Pages**:
  - Home
  - Favorites
  - Movie Details
  - TV Shows
  - Sign In / Sign Up

### Backend
- **Node.js**: Backend server built with Node.js.
- **Express**: RESTful API for handling requests.
- **MongoDB**: Database for storing user and movie data.
- **Features**:
  - User authentication.
  - Favorite movies management.

## Project Structure

### Frontend
Located in the `frontend-project/` directory:
- `src/components/`: Reusable UI components.
- `src/pages/`: Pages for different routes.
- `src/services/`: API and service integrations.

### Backend
Located in the `backend/` directory:
- `controllers/`: Logic for handling API requests.
- `models/`: MongoDB models.
- `routes/`: API routes.

## Installation

### Prerequisites
- Node.js and npm installed.
- MongoDB instance running.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Movie-Website-React.git
   cd Movie-Website-React
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend-project
   npm install
   ```

4. Start the backend server:
   ```bash
   cd ../backend
   npm start
   ```

5. Start the frontend development server:
   ```bash
   cd ../frontend-project
   npm run dev
   ```

6. Open the app in your browser at `http://localhost:5173`. // example 

## Requirements

The following dependencies are required for this project:

- express
- mongoose
- cors
- dotenv
- jsonwebtoken
- react
- react-dom
- react-router-dom
- axios
- nodemon
- vite

You can install these dependencies using the `requirements.txt` file.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)