// import { API_BASE_URL, UPLOAD_ENDPOINT } from '../utils/constants';

export class ApiService {
  static async uploadPDFs(pdf1, pdf2) {
    const formData = new FormData();
    formData.append('pdf1', pdf1);
    formData.append('pdf2', pdf2);

    const response = await fetch(`${API_BASE_URL}${UPLOAD_ENDPOINT}`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}