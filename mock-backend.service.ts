import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockBackendService {
  private apiUrl = 'https://invoicedataautomate-default-rtdb.firebaseio.com=AIzaSyAT6sGH4dCsvZQgrDJxpzhlPW2N04GKvaI';

  constructor(private http: HttpClient) { }

  extractInvoiceData(file: File, invoiceData: any): Observable<any>{
    const formData = new FormData();
    formData.append('file', file);

    return this.http
      .post<any>(`${this.apiUrl}/api/server`, formData)
      .pipe(
        catchError(
          (error) => {
            console.error('error extracting data: ', error);
            return of ({ error: 'an error occurred during data extraction' });
          }
        )
      );
    return this.http.post(this.apiUrl, invoiceData);
  }
}
