import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  show() {

    var path = window.location.pathname;
    if (path == '/login') {
      return false;
    }
    return true;
  }
}
