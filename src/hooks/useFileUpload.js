import { useState } from 'react';
import { ACCEPTED_FILE_TYPE, MAX_FILE_SIZE } from '../utils/constants';
export const useFileUpload = () => {
  const [files, setFiles] = useState({ pdf1: null, pdf2: null });
  const [error, setError] = useState(null);

  const validateFile = (file) => {
    if (!file) return false;
    
    if (file.type !== ACCEPTED_FILE_TYPE) {
      setError('Please select a valid PDF file');
      return false;
    }
    
    if (file.size > MAX_FILE_SIZE) {
      setError('File size must be less than 10MB');
      return false;
    }
    
    return true;
  };

  const handleFileChange = (fileType, file) => {
    if (validateFile(file)) {
      setFiles(prev => ({ ...prev, [fileType]: file }));
      setError(null);
    }
  };

  const resetFiles = () => {
    setFiles({ pdf1: null, pdf2: null });
    setError(null);
  };

  const resetFile = (fileType) => {
    setFiles(prev => ({ ...prev, [fileType]: null }));
  };

  return {
    files,
    error,
    handleFileChange,
    resetFiles,
    resetFile,
    isValid: files.pdf1 && files.pdf2
  };
};