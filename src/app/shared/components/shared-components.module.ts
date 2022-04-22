import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape/rodape.component';
import { ErrMsgComponent } from './err-msg/err-msg.component';
import { BtnIconComponent } from './btn-icon/btn-icon.component';

import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [RodapeComponent, ErrMsgComponent, BtnIconComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    RodapeComponent,
    ErrMsgComponent,
    BtnIconComponent
  ]
})
export class SharedComponentsModule { }
