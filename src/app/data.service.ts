import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
const udemyInstructorApiKey = environment.udemyInstructorApiKey;
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUdemyCourses() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${udemyInstructorApiKey}`,
    });
    const url =
      'https://www.udemy.com/instructor-api/v1/taught-courses/courses?fields[course]=@all';
    return this.http
      .get(url, { headers })
      .pipe(tap((data) => console.log(data)));
  }
}
