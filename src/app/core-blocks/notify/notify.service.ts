import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  title: string;
  message: string;
  show: boolean;
  alertType: string;

  constructor() { }

  error(message: string): void {
    this.notify(message, 'danger');
  }

  info(message: string): void {
    this.notify(message, 'success');
  }

  clear(): void {
    this.title = '';
    this.message = '';
    this.show = false;
  }

  private notify(message: string, alertType: string): void {
    this.message = message;
    this.alertType = alertType;
    this.show = true;
    this.scrollToTop();
  }

  private scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
