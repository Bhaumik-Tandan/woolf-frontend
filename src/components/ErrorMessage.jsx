// ErrorMessage.jsx
import { AlertCircle, X } from 'lucide-react';

const ErrorMessage = ({ message, onDismiss, className = '' }) => {
  if (!message) return null;

  return (
    <div className={`flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md border border-red-200 ${className}`}>
      <AlertCircle className="w-5 h-5 flex-shrink-0" />
      <span className="text-sm flex-1">{message}</span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-red-400 hover:text-red-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;