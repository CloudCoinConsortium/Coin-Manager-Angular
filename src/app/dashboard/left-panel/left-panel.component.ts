import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';
import { ApiService, DataService } from 'src/app/services/api.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  type: string;
  public themeDarkActive: boolean;
  public themeLightActive: boolean;
  public tabSelector: string;
  skywallet: string = null;
  showLoader: boolean = false;
  totalBalance: any = 0;
  totalSkyBalance: any = 0;
  userSky: string;
  userLocal: string;
  nft: string;
  all: any;
  allSky: any;
  payload: any;
  deleteSkyvault: string;
  destName: string;
  data: any;
  walletName: any;
  skyName: any;
  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
  };

  constructor(private eventService: EventService,
    private onlyonce: DataService,
    private changeDetectorRef: ChangeDetectorRef,
    private api: ApiService,
    private router: Router) {
    this.tabSelector == ''
    this.type = localStorage.getItem('wallet');
    this.userLocal = localStorage.getItem('userLocal');
    this.userSky = localStorage.getItem('userSky');
    this.nft = localStorage.getItem('Nft')

    if (localStorage.getItem('wallet') == 'localwallet') {
      this.tabSelector = 'wallet'
    } else if (localStorage.getItem('wallet') == 'skywallet') {
      this.tabSelector = 'skyvault'
    } else if (localStorage.getItem('wallet') == 'nftwallet') {
      this.tabSelector = 'nft'
    }

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
  }

  ngOnInit(): void {
    this.totalBalance = Number(sessionStorage.getItem('totalBal'));
    this.totalSkyBalance = Number(sessionStorage.getItem('totalSkyBal'));
    this.eventService.watchStorage().subscribe((data: string) => {
      if (data === 'upload') {
        if (this.type == 'localwallet') {
          this.totalBalance = 0;
          this.userLocal = localStorage.getItem('userLocal');
          this.getAllwallet();
        }
      }
    });
    this.changeDetectorRef.detectChanges();
    this.eventService.changeLocal.subscribe
      (message => {
        if (message[0] != "Empty") {
          if (message.length == 0) {
            this.totalBalance = 0;
            this.getAllwallet();
          } else {
            this.all = message;
          }
        } else {
          this.all = [];
        }
      });
    this.eventService.changeSky.subscribe
      (message => {
        if (message[0] != "Empty") {
          if (message.length == 0) {
            this.totalSkyBalance = 0;
            sessionStorage.setItem('totalSkyBal', '0');
            this.getList();
          } else {
            this.allSky = message;
          }
        }
      });
    this.eventService.changeNft.subscribe
      (message => {
        if (message[0] != "Empty") {
          if (message.length == 0) {
            this.getNftByGroups();
          } else {
            this.data = message;
          }

        }
      });
  }

  async getNftByGroups() {
    try {
      let response: any = await this.api.nftGroups();
      if (response.status === "success") {
        this.data = response.payload;
        if (this.data?.length == 0) {
          this.eventService.changenftdata(['Empty']);
        } else {
          this.eventService.changenftdata(this.data)
        }

      }
    } catch (e) {
      console.log(e)
    }
  }

  // localwallet function

  async getAllwallet() {
    try {
      let response: any;
      response = await this.api.getWallet();
      if (response.status == "success") {
        this.all = response.payload;
        this.walletName = this.all[0].name
        if (this.all?.length == 0) {
          this.eventService.changeLocaldata(["Empty"]);
        } else {
          this.eventService.changeLocaldata(this.all);
        }
        localStorage.setItem('localLength', this.all?.length);
        for (let i = 0; i < this.all.length; i++) {
          this.totalBalance = this.totalBalance + Number(this.all[i]?.balance);
        }
        sessionStorage.setItem('totalBal', this.totalBalance);
        let data = this.onlyonce.getData();
        if (data != 'leftover') {
          this.all.forEach(item => {
            this.leftover(item.name);
          });
        }
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  createWallet(name) {
    this.userLocal = name;
    localStorage.setItem('wallet', 'localwallet')
    this.eventService.setItem('userLocal', name, "changelocal")
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
  }
  createSkyVault(name) {
    this.userSky = name;
    localStorage.setItem('wallet', 'skywallet');
    this.eventService.setItem('userSky', name, 'changesky');
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
  }

  goToGallery(name) {
    localStorage.setItem('wallet', 'nftwallet')
    this.eventService.setItem('Nft', name, "changenft")
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
  }

  async leftover(name: string) {
    try {
      let response: any = await this.api.leftover(name);
      if (response.status === "success") {
        if (response?.payload?.balance > 0) {
          Swal.fire({
            title: "Looks like the last import did not finish. Continue importing leftover coins",
            icon: 'info',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) {
              {
                this.suspect(name);
              }
            }
          });
        }
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async suspect(name: string) {
    try {
      var data = {
        name: name,
        tag: "leftover coin",
        items: [{ type: "suspect" }]
      }
      let response: any = await this.api.suspect(data);

      if (response.status === "success") {
        this.showLoader = true;
        this.doImport(response.payload?.id, (data: any) => {
        });
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async doImport(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    if (task) {
      this.payload = task.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          this.showLoader = false;
          this.eventService.setItem("wallet", "localwallet", 'upload');
        } else {
          this.showLoader = false;
          Swal.fire({
            title: "Failure! could not proceed with the transaction. " + this.payload?.data?.message,
            icon: 'error',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        }
        return;
      }
      setTimeout(() => {
        this.doImport(taskID, xdata)
      }, 500)

    }
    else {
      this.showLoader = false;
    }
  }

  // skyvault function

  async getList() {
    try {
      let response: any = await this.api.getList();
      if (response.status == "success") {
        this.allSky = response.payload;
        this.skyName = this.allSky[0].name
        if (this.allSky?.length != 0) {
          this.getSky();
          var y = this.allSky.filter(x => {
            return x.name == this.userSky
          })
          localStorage.setItem('skyLength', this.allSky?.length);
          localStorage.setItem('serial', y[0]?.idcoin?.sn);
          let data = this.onlyonce.getData();
          if (data != 'leftover') {
            this.allSky.forEach(item => {
              this.skydetect(item.name);
            });
          }
        } else {
          this.eventService.changeskydata(["Empty"]);
        }
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async skydetect(d: string) {
    try {
      var data = {
        name: d
      }
      let response: any = await this.api.detectsky(data);
      if (response.status == "success") {
        this.onlyonce.setData('leftover');
        this.detectSkyvault(response.payload?.id, d, (data: any) => { })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async detectSkyvault(taskID: any, name: string, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    if (task) {
      this.payload = task.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          if (this.payload?.data?.counterfeit != 0) {
            this.deleteSkyvault = name;
            this.deleteSky();
            Swal.fire({
              title: name + " Pass Key is counterfeit!",
              icon: 'info',
              confirmButtonText: 'Okay',
            }).then((result) => {
              if (result.value) { { } }
            });
          }
          else if (this.payload?.data?.fracked != 0) {
            this.fixKey(name, this.payload?.data?.coins[0].pownstring);
            Swal.fire({
              title: name + " Pass Key is fracked!",
              icon: 'info',
              confirmButtonText: 'Okay',
            }).then((result) => {
              if (result.value) { { } }
            });
          }
        }
        return;
      }
      setTimeout(() => {
        this.detectSkyvault(taskID, name, xdata)
      }, 500)
    }
  }

  async fixKey(skyname: string, pown: any) {
    try {
      var data = {
        name: skyname,
        pownstring: pown
      }
      let response: any = await this.api.idFix(data);
      if (response.status == "success") {
        this.doFixsky(response.payload?.id, (data: any) => { })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async doFixsky(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    if (task) {
      this.payload = task.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          if (this.payload?.data?.number_failed === 0) {
            Swal.fire({
              title: "Pass Key was Fixed and is now Healthy",
              icon: 'success',
              confirmButtonText: 'Okay',
            }).then((result) => {
              if (result.value) { { } }
            });
          } else {
            Swal.fire({
              title: "Pass Key is fracked and the attempt to fix failed. Try again later",
              icon: 'error',
              confirmButtonText: 'Okay',
            }).then((result) => {
              if (result.value) { { } }
            });
          }
        }
        else {
          Swal.fire({
            title: this.payload.data.message,
            icon: 'error',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        }
        return;
      }
      setTimeout(() => {
        this.doFixsky(taskID, xdata)
      }, 500)
    }
  }

  async deleteSky() {
    try {
      let response: any = await this.api.deleteFromFolder(this.deleteSkyvault);
      if (response.status == "success") {
        this.doCheck1(response.payload?.id, (data: any) => { })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async doCheck1(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    console.log("Task done: ", task);
    if (task) {
      this.payload = task.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          this.getlistafterDelete();
          var index = this.allSky.findIndex(x =>
            x.name === this.deleteSkyvault
          );
          this.allSky.splice(index, 1);
          this.eventService.changeskydata(this.allSky);
          Swal.fire({
            title: "We deleted " + this.deleteSkyvault + " because it's Pass Key is counterfeit.",
            icon: 'success',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) {
            }
          });
        } else {
          Swal.fire({
            title: this.payload.data.message,
            icon: 'error',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        }
        return;
      }
      setTimeout(() => {
        this.doCheck1(taskID, xdata)
      }, 500)
    }
  }

  async getlistafterDelete() {
    try {
      let response: any = await this.api.getList();
      if (response.status === 'success') {
        var skyDetails = response.payload;
        if (skyDetails?.length !== 0) {
          this.eventService.setItem('userSky', skyDetails[0].name, 'skydelete');
        } else {
          this.eventService.changeskydata(["Empty"]);
          this.eventService.setItem('wallet', 'localwallet', 'localdelete');
        }
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async getSky() {
    try {
      let response: any = await this.api.getAllSky();
      if (response.status == "success") {
        this.doCheck(response.payload?.id, (data: any) => {
        })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async doCheck(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    if (task) {
      this.payload = task.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          this.allSky = this.payload.data;
          if (this.allSky?.length == 0) {
            this.eventService.changeskydata(["Empty"]);
          } else {
            this.eventService.changeskydata(this.allSky);
          }
          for (let i = 0; i < this.allSky.length; i++) {
            this.totalSkyBalance = this.totalSkyBalance + Number(this.allSky[i]?.balance);
          }
          sessionStorage.setItem('totalSkyBal', this.totalSkyBalance);
        }
        return;
      }
      setTimeout(() => {
        this.doCheck(taskID, xdata)
      }, 500)
    }
  }

  getWalletDetail(name) {
    this.userLocal = name;
    localStorage.setItem('wallet', 'localwallet')
    this.eventService.setItem('userLocal', name, "changelocal")
    this.router.navigate(["/dashboard/home"]);
  }

  getSkyDetail(name, id) {
    this.userSky = name;
    localStorage.setItem('wallet', 'skywallet');
    this.eventService.setItem('userSky', name, 'changesky');
    localStorage.setItem('serial', id);
    this.router.navigate(["/dashboard/home"]);
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  tabToggler(val: string) {
    this.tabSelector = val;
  }

  walletTab() {
    this.tabToggler('wallet')
    this.getWalletDetail(this.userLocal)
  }

  skyvaultTab() {
    this.tabToggler('skyvault')
    this.getSkyDetail(this.userSky, 'serial')
  }

  nftTab() {
    this.tabToggler('nft')
    this.goToGallery(this.nft)
    this.router.navigate(["/dashboard/create-nft-gallery"])
  }

}
