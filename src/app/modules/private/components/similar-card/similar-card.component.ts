import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar-card',
  templateUrl: './similar-card.component.html',
  styleUrls: ['./similar-card.component.css']
})
export class SimilarCardComponent implements OnInit {
  @Input()
  movie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
