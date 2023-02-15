import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  nftSettingsForm: FormGroup;
  public tabSelector: string;
  public settings: boolean = false;
  public all: any;
  public req: any;
  public max: any;
  public echo: any;
  nftsettingsform: any;
  regexp: string;
  upload_url: any;
  secret_key: any;
  api_key: any;
  dname: any;

  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
  };


  constructor(
    private api: ApiService,
    private router: Router,
  ) {
    this.tabSelector = 'performance';
  }

  ngOnInit(): void {
    this.regexp = "^(?:[a-zA-Z0-9\-][a-zA-Z0-9\-]{0,61})*([\.]{1,1}[a-z]{2,})+$";
    this.nftSettingsForm = new FormGroup({
      'dnsname': new FormControl('', Validators.pattern(this.regexp)),
      'url': new FormControl(this.upload_url, [Validators.required]),
      'secretkey': new FormControl(this.secret_key, [Validators.required]),
      'apikey': new FormControl(this.api_key, [Validators.required]),
    });
    this.getAllwallet();
    this.getSetting();
    this.getConfDetails();
  }

  async onSubmit(form: FormGroup) {
    console.log(this.nftSettingsForm)
    this.uploadConfFile();
  }

  isValidInput(value: any) {
    return this.nftSettingsForm.controls[value].invalid &&
      (this.nftSettingsForm.controls[value].dirty || this.nftSettingsForm.controls[value].touched);
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  async getSetting() {
    let response: any = await this.api.setting();
    if (response.status == 'success') {
      this.req = response.payload?.default_timeout_mult;
      this.echo = response.payload?.echo_timeout_mult;
      this.max = response.payload?.max_notes;
    }
  }

  async getAllwallet() {
    try {
      let response: any;
      response = await this.api.getWallet();
      this.all = response.payload;
    }
    catch (e) {
      console.log(e);
    }
  }

  tabToggler(val: string) {
    this.tabSelector = val;
  }

  updateSetting(e, name) {
    this.settings = true;
    if (name == 'req') {
      this.req = e.value;
    }
    else if (name == 'echo') {
      this.echo = e.value;
    }
    else if (name == 'max') {
      this.max = e.value;
    }
  }

  async taskSetting() {
    if (this.settings == true) {
      try {
        var data = {
          "default_timeout_mult": this.req,
          "echo_timeout_mult": this.echo,
          "max_notes": this.max,
          "change_server_sn": 2
        }
        let response: any = await this.api.settingTask(data);
        console.log(response);
        if (response.status === "success") {
          Swal.fire({
            title: "Changes saved successfully!",
            icon: 'success',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        }
      }
      catch (e) {
        console.log(e);
      }
    }
  }

  async uploadConfFile() {

    try {
      var data = {
        upload_url: String(this.nftSettingsForm.get('url').value),
        upload_secret_key: String(this.nftSettingsForm.get('secretkey').value),
        cf_api_key: String(this.nftSettingsForm.get('apikey').value)
      }
      console.log(data);
      let response: any = await this.api.updateNftConf(data);
      if (response.status === "success") {
        Swal.fire({
          title: 'Changes have been uploaded successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        });
        this.router.navigate(['/dashboard/create-settings']);

      } else {
        Swal.fire({
          title: 'Failed to save changes',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
        this.router.navigate(['/dashboard/create-settings']);

      }
    }
    catch (e) {
      console.log(e);

    }
  }

  async getConfDetails() {
    try {
      let response: any = await this.api.returnNftConf();
      if (response.status === "success") {
        this.upload_url = response.payload.upload_url;
        this.secret_key = response.payload.upload_secret_key;
        this.api_key = response.payload.cf_api_key;
        var splitted = this.upload_url.split("/", 3)
        this.dname = splitted[2]
      } else {
        console.log('no previous configurations found');
      }
      this.nftSettingsForm.patchValue({
        secretkey: this.secret_key,
        apikey: this.api_key,
        url: this.upload_url,
        dnsname: this.dname

      })
    }

    catch (e) {
      console.log(e);

    }

  }

  clearForm() {
    this.nftSettingsForm.reset();
  }


}
