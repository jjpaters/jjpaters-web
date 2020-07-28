import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotifyComponent } from './notify/notify.component';

@NgModule({
  declarations: [
    NotifyComponent
  ],
  exports: [
    NotifyComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class CoreBlocksModule { }
