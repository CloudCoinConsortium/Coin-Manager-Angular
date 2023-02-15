import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-existing-nft',
  templateUrl: './existing-nft.component.html',
  styleUrls: ['./existing-nft.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class ExistingNftComponent implements OnInit {
  public title_name: string;
  public domain_name: any;
  public sn_detail: any;
  public nftForm: FormGroup;
  public cSelectorImg: string;
  public cSelectorText: string;
  public destName: string;
  public nftName: string;
  public all: any;
  public customSelectorOpen: boolean;
  public customSelectorOpen1: boolean = false;
  public walletselected: boolean = false;
  public nftnumber: number;
  public payload: any;
  public showLoader = false;
  public loadingMessage: string = '';

  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json',
  };

  constructor(
    private api: ApiService,
    private router: Router,
    private actRoute: ActivatedRoute,) {
    this.cSelectorText = 'Select a wallet';
  }

  ngOnInit(): void {

    this.nftForm = new FormGroup({
      'nftnumber': new FormControl(1, [Validators.required, Validators.min(1)]),
    });
    this.getAllwallet();
    this.actRoute.queryParams.subscribe(params => {
      this.title_name = params['title_name'];
      this.domain_name = params['domain_name'];
      this.sn_detail = params['snvalue']
    });
  }

  async onSubmit(form: FormGroup) {
    this.exportNft()
  }

  async balancecheck() {
    this.nftnumber = this.nftForm.get('nftnumber').value;
    let response: any = await this.api.getTransaction(this.destName);
    if (response.payload.balance < this.nftnumber) {
      Swal.fire({
        title: 'You cannot make this number of NFTs because selected wallet balance is ' + response.payload.balance + 'cc',
        icon: 'info',
        confirmButtonText: 'Okay'
      })
    }
  }

  async getAllwallet() {
    try {
      let response: any;
      response = await this.api.getWallet();
      if (response.status == 'success') {
        this.all = response.payload;
        this.cSelectorImg = 'assets/folder-w-border.svg';
        if (this.all.length == 1) {
          this.cSelectorText = this.all[0].name;
          this.customSelectorOpen = false;
          this.walletselected = true;
          this.destName = this.all[0].name
        }
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async customSelector(val: string) {
    this.destName = val;
    this.cSelectorImg = 'assets/folder-w-border.svg';
    this.cSelectorText = val;
    this.customSelectorOpen = false;
    if (this.destName != 'Search wallets') {
      this.walletselected = true;
    }
    let response: any = await this.api.getTransaction(this.destName);
    if (response.payload.balance == 0) {
      Swal.fire({
        title: 'You cannot make NFTs because your wallet is empty.',
        icon: 'info',
        confirmButtonText: 'Okay'
      });
    }

  }
  customSelToggler() {
    this.customSelectorOpen = !this.customSelectorOpen;
  }

  onClick() {
    this.customSelectorOpen1 = false;
  }

  async exportNft() {
    try {
      var data = {
        name: this.destName,
        amount: Number(this.nftForm.get('nftnumber').value),
        template_path: "",
        domain_name: this.domain_name,
        host_name: this.title_name,
        text_color: '#000000',
        x: 10,
        y: 10,
        is_vertical: true,
        font_size: 16,
        description: '',
        is_transparent: true,
        write_sn: false,
        personal_text: ''
      }
      let response: any = await this.api.exportCoinasNft(data);
      this.showLoader = true;
      this.loadingMessage = "Creating NFT..."
      if (response.status === "success") {
        this.doCheck1(response.payload?.id, (data: any) => {
        });
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async doCheck1(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    if (task) {
      this.payload = task.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          this.showLoader = false;
          Swal.fire({
            title: 'NFT has been created successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          this.router.navigate(['/dashboard/create-nft-gallery']);
        } else {
          this.showLoader = false;
          Swal.fire({
            title: 'Failed to create NFT',
            icon: 'error',
            confirmButtonText: 'Okay'
          })
          this.router.navigate(['/dashboard/create-nft']);
          setTimeout(() => {
            window.location.reload();
          }, 3000)
        }
        return;
      }
      setTimeout(() => {
        this.doCheck1(taskID, xdata)
      }, 500)
    }
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

}

