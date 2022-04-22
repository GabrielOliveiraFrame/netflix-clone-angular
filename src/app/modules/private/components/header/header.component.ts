import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  resetStorage(){
    sessionStorage.removeItem('usuario');
    localStorage.removeItem('usuario');

    this.returnLogin();
  }

  returnLogin(){
    this.router.navigate(['public/login']);
  }


}
