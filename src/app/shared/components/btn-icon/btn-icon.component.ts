import { IconType } from './../../enum/icon-type.enum';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-icon',
  templateUrl: './btn-icon.component.html',
  styleUrls: ['./btn-icon.component.css']
})
export class BtnIconComponent implements OnInit {
  @Input()
  type: string;

  constructor() { }

  ngOnInit(): void {
  }

  get enumType(): string {
    return IconType[this.type];
  }

}
