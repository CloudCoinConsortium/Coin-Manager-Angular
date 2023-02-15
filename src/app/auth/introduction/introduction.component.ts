import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  public themeDarkActive: boolean;
  public themeLightActive: boolean;
  public themeDropdwnToggler: boolean;
  isShow: boolean = false;
  loadingMessage: string;
  showContent: boolean = false;
  showLoader: boolean;
  all: any;
  bal: any;
  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
  };
  errorOptions: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/error.json'
  };
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

  constructor(
    private eventService: EventService,
    private router: Router,
    private api: ApiService
  ) {
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

  }

  ngOnInit(): void {
    this.userLocal = localStorage.getItem('userLocal')
    this.userSky = localStorage.getItem('userSky')
    this.localLength = Number(localStorage.getItem('localLength'))
    this.skyLength = Number(localStorage.getItem('skyLength'))
    this.localbalance = Number(sessionStorage.getItem('firstWltBal'))
    Swal.fire({
      title: "Coin Manager",
      text: "\n Used to authenticate, store and pay out CC. This software is provided as-is with all faults, defects and errors, and without warranty of any kind. This software is provided free of charge by the CC Consortium.",
      icon: 'info',
      confirmButtonText: 'Okay',
    }).then((result) => {
      if (result.value) { }
      else {
        window.close();
      }
    });
    this.initialize();
  }

  async initialize() {
    this.showLoading(true);
    try {
      let response: any = await this.api.init();
      if (response.status == "success") {
        this.showContent = true;
        this.showLoading(false);
        this.isShow = false;
        if (this.skyLength > 0 || this.localLength > 1 || this.localbalance > 0) {
          this.showContent = false;
          this.goToDash(this.walletName);
        }
      } else {
        this.showContent = false;
      }
    }
    catch (e) {
      this.initialize();
      this.showContent = false;
    }
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
    this.themeDropdwnToggler = !this.themeDropdwnToggler;
  }

  closeThemeDropdown() {
    this.themeDropdwnToggler = false;
  }

  showLoading(state): void {
    this.loadingMessage = '';
    if (state) {
      this.showLoader = true;
    } else {
      this.showLoader = false;
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  goToDash(name) {
    this.userLocal = name;
    localStorage.setItem('wallet', 'localwallet')
    this.eventService.setItem('userLocal', name, "changelocal")
    this.router.navigate(['/dashboard']);
  }

}
