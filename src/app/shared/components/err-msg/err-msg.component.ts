import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../../validators/form-validations';

@Component({
  selector: 'app-err-msg',
  templateUrl: './err-msg.component.html',
  styleUrls: ['./err-msg.component.css']
})
export class ErrMsgComponent implements OnInit {
  @Input()
  fieldName: string;

  @Input()
  control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  get getMsg(): string {
    for (const err in this.control?.errors) {
      if(this.control?.dirty || this.control?.touched){
        return FormValidations.getMsg(this.fieldName, err, this.control.errors[err]);
      } else {
        return null
      }
    }
  }

}
