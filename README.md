# AI PDF Analyzer Frontend

This is the frontend for the AI PDF Analyzer application. It's built with React, Vite, and Tailwind CSS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd woolf-frontend
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```
or
```bash
yarn dev
```

This will start the development server. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal) to see the application.

## Features

-   Upload a Job Description and a Candidate's CV in PDF format.
-   Analyze the files to get an intelligent analysis of candidate fit, strengths, and areas for improvement.
-   Reset the file selection.
-   Responsive design for different screen sizes.

## Project Structure

-   `src/components`: Contains the React components used in the application.
-   `src/hooks`: Contains custom React hooks.
-   `src/services`: Contains the API service for communicating with the backend.
-   `src/utils`: Contains constants and utility functions.
-   `src/App.jsx`: The main application component.
-   `src/index.css`: Global CSS styles.
-   `public/`: Contains the public assets.
