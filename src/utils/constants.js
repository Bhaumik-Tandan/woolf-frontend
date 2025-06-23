export const API_BASE_URL = process.env.REACT_APP_API_URL;
export const UPLOAD_ENDPOINT = '/upload';
export const ACCEPTED_FILE_TYPE = 'application/pdf';
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const SCORES = {
  EXCELLENT: { min: 8, color: '#10B981' },
  GOOD: { min: 6, color: '#3B82F6' },
  FAIR: { min: 4, color: '#F59E0B' },
  POOR: { min: 0, color: '#EF4444' }
};