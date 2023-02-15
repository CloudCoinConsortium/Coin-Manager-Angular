import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  public user: string;

  constructor(
    private router: Router,
  ) { }

  async ngOnInit() {
    this.user = localStorage.getItem('userSky');
  }

  go() {
    localStorage.setItem('wallet', 'skywallet');
  }

}
