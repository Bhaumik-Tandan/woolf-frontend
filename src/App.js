import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import FileUploadArea from './components/FileUploadArea';
import ResultsDisplay from './components/ResultsDisplay';
import Button from './components/Button';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

// Hooks and Services
import { useFileUpload } from './hooks/useFileUpload';
import { ApiService } from './services/apiService';

// Styles
import './App.css';

function App() {
  const { files, error: fileError, handleFileChange, resetFiles, isValid } = useFileUpload();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [apiError, setApiError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValid) {
      setApiError('Please upload both PDF files');
      return;

    }
    setLoading(true);
    setApiError(null);
    try {
      const response = await ApiService.analyzeFiles(files.pdf1, files.pdf2);
      setResults(response.data);
    } catch (error) {
      setApiError('Failed to analyze files. Please try again.');
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleReset = () => {
    resetFiles();
    setResults(null);
    setApiError(null);
  };

  return (
    <div className="App">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <FileUploadArea
          files={files}
          error={fileError}
          onFileChange={handleFileChange}
          onReset={handleReset}
        />
        {loading && <LoadingSpinner />}
        {apiError && <ErrorMessage message={apiError} onDismiss={() => setApiError(null)} />}
        {results && <ResultsDisplay data={results} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
