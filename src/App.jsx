import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import FileUploadArea from './components/FileUploadArea';
import ResultsDisplay from './components/ResultsDisplay';
import Button from './components/Button';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

import { useFileUpload } from './hooks/useFileUpload';
import { ApiService } from './services/apiService';

function App() {
  const { files, error: fileError, handleFileChange, resetFiles, resetFile, isValid } = useFileUpload();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [apiError, setApiError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValid) {
      setApiError('Please upload both a job description and a CV.');
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
    <div className="App bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FileUploadArea
              fileType="pdf1"
              label="Job Description"
              file={files.pdf1}
              onFileChange={handleFileChange}
              onReset={resetFile}
              disabled={loading}
            />
            <FileUploadArea
              fileType="pdf2"
              label="Candidate's CV"
              file={files.pdf2}
              onFileChange={handleFileChange}
              onReset={resetFile}
              disabled={loading}
            />
          </div>
          
          <div className="mb-6">
            {fileError && <ErrorMessage title="File Error" message={fileError} onDismiss={() => setApiError(null)} />}
          </div>

          <div className="flex items-center justify-center space-x-4">
            <Button
              type="submit"
              disabled={!isValid || loading}
              variant="primary"
            >
              {loading ? 'Analyzing...' : 'Analyze Files'}
            </Button>
            <Button
              type="button"
              onClick={handleReset}
              disabled={loading}
              variant="secondary"
            >
              Reset
            </Button>
          </div>
        </form>

        {loading && <div className="mt-6"><LoadingSpinner text="Analyzing documents, please wait..."/></div>}
        {apiError && <div className="mt-6"><ErrorMessage title="Analysis Failed" message={apiError} onDismiss={() => setApiError(null)} /></div>}
        {results && <div className="mt-8"><ResultsDisplay data={results} /></div>}
       
      </main> 
      <Footer />
    </div>
  );
}

export default App;
