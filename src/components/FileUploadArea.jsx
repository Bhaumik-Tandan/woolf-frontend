import React from 'react';
import { Upload, CheckCircle, FileText, X } from 'lucide-react';

const FileUploadArea = ({ fileType, label, file, onFileChange, onReset, disabled = false }) => {
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
    <div className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${disabled ? 'bg-gray-200 cursor-not-allowed' : 'border-gray-300 hover:border-blue-500 bg-white'}`}>
      <input
        type="file"
        id={fileType}
        accept=".pdf"
        onChange={handleFileSelect}
        disabled={disabled}
        className="hidden"
      />
      <label htmlFor={fileType} className={`flex flex-col items-center justify-center w-full h-full ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        {file ? (
          <div className="flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-green-500 mb-3" />
            <p className="font-semibold text-gray-700">{label}</p>
            <p className="text-sm text-gray-500 truncate max-w-full">{file.name}</p>
            <p className="text-xs text-gray-400">{formatFileSize(file.size)}</p>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onReset(fileType);
              }}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Remove file"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Upload className="w-12 h-12 text-gray-400 mb-3" />
            <p className="font-semibold text-gray-700">{label}</p>
            <p className="text-sm text-gray-500">Click to upload a PDF file</p>
            <p className="text-xs text-gray-400 mt-1">Max file size: 10MB</p>
          </div>
        )}
      </label>
    </div>
  );
};

export default FileUploadArea;