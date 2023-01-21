import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  getQuiz(subject: any){
    return this.http.get<any>(`assets/${subject}.json`);
  }
}
