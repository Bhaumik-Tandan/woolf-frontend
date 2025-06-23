import React, { useState } from 'react';
import { Target, TrendingUp, AlertTriangle } from 'lucide-react';
import ScoreCard from './ScoreCard';
import './Results.css';

const ResultsDisplay = ({ results, onReset }) => {
  const [showRawData, setShowRawData] = useState(false);

  if (!results) return <h1>Please try again</h1>;

  // Use alignment.score for overall rating
  const overallRating = results.alignment?.score ?? 0;

  return (
    <div className="results-container">
      {/* Overall Summary */}
      <div className="overall-summary rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between mb-8 bg-gradient-to-br from-blue-600 via-purple-500 to-indigo-600">
        <div className="flex items-center space-x-4">
          <Target className="w-12 h-12 text-white bg-blue-700 rounded-full p-2 shadow-md" />
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-1">Job Alignment</h2>
            <p className="text-blue-100 text-lg font-medium">{results.alignment?.reason}</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 md:mt-0">
          <span className="text-blue-100 text-sm">Overall Match</span>
          <span className="text-5xl font-black text-white drop-shadow-lg">{overallRating}/10</span>
        </div>
      </div>

      {/* Strengths List */}
      {Array.isArray(results.strengths) && results.strengths.length > 0 && (
        <div className="detailed-analysis">
          <div className="analysis-header">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold text-gray-800">Candidate Strengths</h3>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            {results.strengths.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Weaknesses List */}
      {Array.isArray(results.weaknesses) && results.weaknesses.length > 0 && (
        <div className="detailed-analysis">
          <div className="analysis-header">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <h3 className="text-lg font-semibold text-gray-800">Areas for Improvement</h3>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            {results.weaknesses.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          onClick={onReset}
          className="reset-button"
        >
          Analyze New Files
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;