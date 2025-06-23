import React from 'react';
import { Upload, CheckCircle, FileText } from 'lucide-react';
import './FileUploadArea.css';

const FileUploadArea = ({ fileType, label, file, onFileChange, disabled = false }) => {
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && onFileChange) {
      onFileChange(fileType, selectedFile);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={`file-upload-area ${disabled ? 'disabled' : ''}`}>
      <input
        type="file"
        id={fileType}
        accept=".pdf"
        onChange={handleFileSelect}
        disabled={disabled}
        className="hidden"
      />
      <label htmlFor={fileType} className={`upload-label ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        <div className="upload-content">
          {file ? (
            <>
              <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
              <div className="file-info">
                <p className="file-name">{file.name}</p>
                <p className="file-size">{formatFileSize(file.size)}</p>
              </div>
              <p className="upload-hint success">✓ Ready to analyze</p>
            </>
          ) : (
            <>
              <FileText className="w-8 h-8 text-gray-400 mb-2" />
              <p className="upload-text">Upload {label}</p>
              <p className="upload-hint">Click to browse PDF files</p>
            </>
          )}
        </div>
      </label>
    </div>
  );
};

export default FileUploadArea;