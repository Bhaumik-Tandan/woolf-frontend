import { Loader2 } from "lucide-react";

const LoadingSpinner = ({ size = 'lg', text, className = '' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 text-center ${className}`} role="status" aria-live="polite">
      <Loader2 className={`${sizes[size]} animate-spin text-blue-500`} />
      {text && <p className="text-lg font-medium text-gray-700">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;