import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cloud-wallet';
  public themeTogChanger: boolean;
  public themeDarkActive: boolean;
  public themeLightActive: boolean;
  public themeDropdwnToggler: boolean;
  showToolDropdown: boolean;

  all: any;
  bal: any;
  payload: any;
  showSky: boolean;
  skyAll: any;
  walletName: any;
  skyLen: any;
  localLen: any;
  userLocal: any;
  skyName: string;
  userSky: string;
  localLength: number;
  skyLength: number;
  localbalance: number;


  constructor(private eventService: EventService,
    private router: Router,
    private api: ApiService) {
    if (localStorage.getItem('themeLightActive') == '1') {
      this.themeTogChanger = false;
    } else if (localStorage.getItem('themeLightActive') == '0') {
      this.themeTogChanger = true;
    } else {
      this.themeTogChanger = false;
    };

    if (localStorage.getItem('themeLightActive') == '1') {
      this.themeLightActive = true;
      this.themeDarkActive = false;
    } else if (localStorage.getItem('themeLightActive') == '0') {
      this.themeLightActive = false;
      this.themeDarkActive = true;
    } else {
      this.themeLightActive = true;
      this.themeDarkActive = false;
    }
    this.themeDropdwnToggler = false;

    localStorage.setItem('wallet', 'localwallet')
    this.getAllwallet();
    this.getAllvaults();
  }

  ngOnInit() {
    this.eventService.getThemeTogEvent().subscribe(() => {
      if (localStorage.getItem('themeLightActive') == '1') {
        this.themeTogChanger = false;
      } else if (localStorage.getItem('themeLightActive') == '0') {
        this.themeTogChanger = true;
      } else {
        this.themeTogChanger = !this.themeTogChanger;
      }
    });

  }

  themeDarkCaller() {
    if (this.themeDarkActive == false) {
      this.themeDarkActive = true;
      this.themeLightActive = false;
      localStorage.setItem('themeLightActive', '0');
      this.eventService.emitThemeTogEvent();
    }
    this.themeDropdwnToggler = false;
  }
  themeLightCaller() {
    if (this.themeLightActive == false) {
      this.themeLightActive = true;
      this.themeDarkActive = false;
      localStorage.setItem('themeLightActive', '1');
      this.eventService.emitThemeTogEvent();
    }
    this.themeDropdwnToggler = false;
  }

  themeDropDownCaller() {
    if (this.themeLightActive) {
      this.themeDarkCaller();

    }
    else if (this.themeDarkActive) {
      this.themeLightCaller();
    }
  }

  closeThemeDropdown() {
    this.themeDropdwnToggler = false;
  }
  toggleTools() {
    this.showToolDropdown = !this.showToolDropdown;
  }
  closeTools() {
    this.showToolDropdown = false;
  }
  getCorrectRoute() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
  }

  async getAllwallet() {
    try {
      let response: any;
      response = await this.api.getWallet();
      if (response.status === "success") {
        this.all = response.payload;
        this.bal = this.all[0].balance
        sessionStorage.setItem('firstWltBal', this.bal)
        this.walletName = this.all[0].name
        localStorage.setItem('userLocal', this.walletName)
        this.localLen = this.all.length
        localStorage.setItem('localLength', this.localLen)
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async getAllvaults() {
    try {
      let response: any = await this.api.getList();
      this.payload = response.payload;
      if (response.status == "success") {
        this.skyAll = response.payload;
        this.skyLen = this.skyAll?.length;
        this.skyName = response.payload[0].name
        localStorage.setItem('skyLength', this.skyLen)
        localStorage.setItem('userSky', this.skyName)
      }
      console.log(response);
    }
    catch (e) {
      console.log(e);
    }
  }

}
