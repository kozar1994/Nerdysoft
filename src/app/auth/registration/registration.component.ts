import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
//import {subscribe} from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formReg: FormGroup;
  userRegistered = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.formReg = new FormGroup({
      regEmail: new FormControl('', [Validators.email, Validators.required]),
      regPass: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log('form', this.formReg.value);
    if (this.formReg.valid) {
      this.userRegistered = true;
      this.userService
        .addNewUser({email: this.formReg.value.regEmail, pass: this.formReg.value.regPass})
        .subscribe((res) => console.log(res));
    }
  }
}
