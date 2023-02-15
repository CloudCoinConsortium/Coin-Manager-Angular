import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CustomValidators } from '../../create-localwallet/setup-mail-psw/custom-validators';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit {

  public addressForm: FormGroup;
  public successInfo: boolean;
  public errorInfo: boolean;

  constructor(private fb: FormBuilder,
    private raida: ApiService,
    private router: Router) {
    this.addressForm = this.fb.group({
      "username": ['', [Validators.required,
      Validators.pattern('^([^-]|[^-].*)$'),
      Validators.maxLength(64),
      CustomValidators.patternValidator(
        /^[a-zA-Z0-9-]*$/,
        {
          special: true
        }
      ),
      UsernameValidator.cannotContainSpace]],
    })
  }

  isValidInput(value: any) {
    return this.addressForm.controls[value].invalid &&
      (this.addressForm.controls[value].dirty || this.addressForm.controls[value].touched);
  }

  ngOnInit(): void {
  }

  add() {
    var name = this.addressForm.get('username').value + '.skyvault.cc'
    localStorage.setItem('userSky', name);
    this.router.navigate(['/skywallet/upload-cc']);
  }

}
