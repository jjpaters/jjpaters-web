import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navbarOpen = false;

  closeMenu(): void {
    this.navbarOpen = false;
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

}
