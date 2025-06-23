# AI PDF Analyzer Frontend

This is the frontend for the AI PDF Analyzer application. It's built with React 19, Vite, and Tailwind CSS 4.

## Demo Video


 [Loom Demo](https://www.loom.com/share/4305e4ea0e3f4fdbb1ad0651b3a6e851?sid=dbea934b-8007-4863-9fdf-d59161ea218e)

## Features

- Upload a Job Description and a Candidate's CV in PDF format.
- Analyze the files to get an intelligent analysis of candidate fit, strengths, and areas for improvement.
- Modern, responsive UI with a visually appealing results summary.
- Reset and re-analyze with new files easily.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd woolf-frontend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Environment Variables

This project uses a `.env` file to configure the backend API URL. Create a `.env` file in the project root (if not present) and add:

```properties
VITE_API_URL=http://localhost:5000
```

You can change the value to match your backend server address.

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```
or
```bash
yarn dev
```

This will start the development server. Open your browser and navigate to `http://localhost:3000` (or the port shown in your terminal) to see the application.

### Building for Production

To build the app for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/components`: React components (UI, Results, File Upload, etc.)
- `src/hooks`: Custom React hooks
- `src/services`: API service for backend communication
- `src/utils`: Constants and utility functions
- `src/App.jsx`: Main application component
- `src/index.css`: Global CSS styles

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4
- Lucide React Icons
