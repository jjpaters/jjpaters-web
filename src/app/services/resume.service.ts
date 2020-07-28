import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../models/education';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  async getEducations(): Promise<Education[]> {
    const url = `assets/data/education.json`;
    return this.http.get<Education[]>(url).toPromise();
  }

  async getExperiences(): Promise<Experience[]> {
    const url = `assets/data/experience.json`;
    return this.http.get<Experience[]>(url).toPromise();
  }

}
