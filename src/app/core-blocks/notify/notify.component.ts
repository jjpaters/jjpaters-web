import { Component, OnInit } from '@angular/core';
import { NotifyService } from './notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  constructor(public notifyService: NotifyService) { }

  ngOnInit(): void { }

  close(): void {
    this.notifyService.clear();
  }

}
