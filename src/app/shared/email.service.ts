import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
  
export class EmailService {
  private url: string = 'http://localhost:3000/send';

// Required for side-effects
  constructor(private http: HttpClient) { 

  } 

  postMail(content: any) {
    return this.http.post(this.url, JSON.stringify(content), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
}
