
# Netflix-GPT

Netflix-GPT is a clone of Netflix that incorporates movie suggestions using ChatGPT. This project demonstrates the integration of React for the frontend, Firebase for authentication, The Movie Database (TMDB) API for fetching movie data, and OpenAI APIs for generating movie recommendations.

## Features

- **User Authentication**: Sign up and log in with Firebase authentication.
- **Movie Listings**: Browse through various movie collections fetched from TMDB.
- **Movie Details**: View trailers and detailed descriptions of movies.
- **Movie Suggestions**: Get movie recommendations using ChatGPT and OpenAI APIs.

## Tech Stack

- **Frontend**: 
  - React
  - Tailwind CSS

- **Backend**:
  - Firebase (Authentication)
  - TMDB API (Movie Data)
  - OpenAI API (Movie Suggestions)

- **Other Tools**:
  - Create React App
  - Vercel (Deployment)

## Getting Started

### Prerequisites

- Node.js
- Firebase Account
- TMDB API Key
- OpenAI API Key

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/Baburao-sanivada/Netflix-GPT.git
    cd Netflix-GPT
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up Firebase**

    - Create a Firebase project and enable authentication.
    - Update Firebase configuration in your project.

4. **Set up TMDB**

    - Register for a TMDB account and get your API key.
    - Update the TMDB API key in your project.

5. **Set up OpenAI**

    - Register for an OpenAI account and get your API key.
    - Update the OpenAI API key in your project.

6. **Start the development server**

    ```bash
    npm start
    ```

7. **Build for production**

    ```bash
    npm run build
    ```

## Usage

- Access the application at `http://localhost:3000`.
- Sign up or log in to start browsing movies.
- Use the search bar to find movies and get suggestions.

## Project Structure

- **public/**: Public assets and the index.html file.
- **src/**: Source code for the React application.
  - **components/**: Reusable components like the header, footer, and movie cards.
  - **pages/**: Main pages like Home, Login, and Browse.
  - **services/**: Services for API calls and authentication.
  - **App.js**: Main application component.
  - **index.js**: Entry point of the application.

## Deployment

- This project is deployed on Vercel. You can visit the live version [here](https://baburao-netflix-gpt.vercel.app/).

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/name`).
3. Commit your changes (`git commit -m 'Description of changes'`).
4. Push to the branch (`git push origin feature/name`).
5. Create a new Pull Request.
