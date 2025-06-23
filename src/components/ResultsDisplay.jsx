import React, { useState } from 'react';
import { Target, TrendingUp, AlertTriangle, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import ScoreCard from './ScoreCard';
import './Results.css';

const ResultsDisplay = ({ results, onReset }) => {
  const [showRawData, setShowRawData] = useState(false);

  if (!results) return null;

  const getOverallRating = () => {
    const scores = [
      results.overallAlignment?.score,
      results.strengths?.score,
      results.weaknesses?.score
    ].filter(score => score !== undefined);

    if (scores.length === 0) return 0;
    
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return Math.round(average * 10) / 10;
  };

  const overallRating = getOverallRating();

  return (
    <div className="results-container">
      {/* Overall Summary */}
      <div className="overall-summary">
        <div className="summary-header">
          <h2 className="text-2xl font-bold text-gray-900">Analysis Complete</h2>
          <div className="overall-score">
            <span className="score-label">Overall Match</span>
            <span className="score-value">{overallRating}/10</span>
          </div>
        </div>
      </div>

      {/* Score Cards */}
      <div className="score-cards-grid">
        {results.overallAlignment && (
          <ScoreCard
            title="Job Alignment"
            score={results.overallAlignment.score}
            reason={results.overallAlignment.reason}
            color="#3B82F6"
            icon={Target}
          />
        )}

        {results.strengths && (
          <ScoreCard
            title="Candidate Strengths"
            score={results.strengths.score}
            reason={results.strengths.reason}
            color="#10B981"
            icon={TrendingUp}
          />
        )}

        {results.weaknesses && (
          <ScoreCard
            title="Areas for Improvement"
            score={results.weaknesses.score}
            reason={results.weaknesses.reason}
            color="#F59E0B"
            icon={AlertTriangle}
          />
        )}
      </div>

      {/* Detailed Analysis */}
      {results.analysis && (
        <div className="detailed-analysis">
          <div className="analysis-header">
            <FileText className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-800">Detailed Analysis</h3>
          </div>
          <div className="analysis-content">
            <p className="text-gray-600 leading-relaxed">{results.analysis}</p>
          </div>
        </div>
      )}

      {/* Additional Insights */}
      {(results.recommendations || results.keySkills || results.missingSkills) && (
        <div className="insights-section">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Insights</h3>
          
          <div className="insights-grid">
            {results.recommendations && (
              <div className="insight-card">
                <h4 className="font-medium text-gray-700 mb-2">Recommendations</h4>
                <p className="text-sm text-gray-600">{results.recommendations}</p>
              </div>
            )}
            
            {results.keySkills && (
              <div className="insight-card">
                <h4 className="font-medium text-gray-700 mb-2">Key Skills Identified</h4>
                <p className="text-sm text-gray-600">{results.keySkills}</p>
              </div>
            )}
            
            {results.missingSkills && (
              <div className="insight-card">
                <h4 className="font-medium text-gray-700 mb-2">Skills Gap</h4>
                <p className="text-sm text-gray-600">{results.missingSkills}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Raw Data Toggle */}
      {results.rawResponse && (
        <div className="raw-data-section">
          <button
            onClick={() => setShowRawData(!showRawData)}
            className="raw-data-toggle"
          >
            <span>View Raw Response</span>
            {showRawData ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          
          {showRawData && (
            <div className="raw-data-content">
              <pre className="raw-data-text">
                {JSON.stringify(results.rawResponse, null, 2)}
              </pre>
            </div>
          )}
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