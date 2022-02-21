import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrMsgComponent } from './err-msg/err-msg.component';



@NgModule({
  declarations: [ErrMsgComponent],
  imports: [
    CommonModule
  ],
  exports: [ErrMsgComponent]
})
export class SharedComponentsModule { }
