import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const ScoreCard = ({ title, score, reason, color, icon: CustomIcon }) => {
  const getScoreIcon = (score) => {
    if (score >= 7) return TrendingUp;
    if (score >= 4) return Minus;
    return TrendingDown;
  };

  const getScoreColor = (score) => {
    if (score >= 7) return 'text-green-500';
    if (score >= 4) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score) => {
    if (score >= 8) return 'Excellent';
    if (score >= 6) return 'Good';
    if (score >= 4) return 'Fair';
    return 'Needs Improvement';
  };

  const ScoreIcon = getScoreIcon(score);
  const scoreColorClass = getScoreColor(score);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow duration-200" 
         style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {CustomIcon ? (
            <CustomIcon className="w-6 h-6" style={{ color }} />
          ) : (
            <BarChart3 className="w-6 h-6" style={{ color }} />
          )}
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <ScoreIcon className={`w-5 h-5 ${scoreColorClass}`} />
          <div className="text-right">
            <span className="text-2xl font-bold" style={{ color }}>{score}/10</span>
            <p className={`text-sm font-medium ${scoreColorClass}`}>
              {getScoreLabel(score)}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="h-2 rounded-full transition-all duration-300"
            style={{ 
              width: `${(score / 10) * 100}%`,
              backgroundColor: color 
            }}
          />
        </div>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed">{reason}</p>
    </div>
  );
};

export default ScoreCard;