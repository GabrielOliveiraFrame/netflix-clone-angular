import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape/rodape.component';
import { ErrMsgComponent } from './err-msg/err-msg.component';



@NgModule({
  declarations: [RodapeComponent, ErrMsgComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RodapeComponent,
    ErrMsgComponent
  ]
})
export class SharedComponentsModule { }
