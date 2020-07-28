import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../core-blocks/notify/notify.service';
import { ResumeService } from '../services/resume.service';
import { Education } from '../models/education';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  educations: Education[];
  experiences: Experience[];

  constructor(private notifyService: NotifyService , private resumeService: ResumeService) { }

  async ngOnInit(): Promise<void> {
    await this.getEducations();
    await this.getExperiences();
  }

  async getEducations(): Promise<void> {
    try
    {
      this.educations = await this.resumeService.getEducations();
    } catch (ex) {
      this.notifyService.error(`Unable to load education. Please try again.`);
    }
  }

  async getExperiences(): Promise<void> {
    try
    {
      this.experiences = await this.resumeService.getExperiences();
    } catch (ex) {
      this.notifyService.error(`Unable to load experiences. Please try again.`);
    }
  }

}
