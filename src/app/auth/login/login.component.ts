import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {isEmpty} from 'rxjs/internal/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  errorLogin = false;

  constructor(private router: Router, private http: UserService) {
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('user'))) {
      this.router.navigate(['/task']);
    }
    this.formLogin = new FormGroup({
      loginEmail: new FormControl('', [Validators.required, Validators.email]),
      loginPass: new FormControl('', [Validators.required]),
      loginCheck1: new FormControl(false)
    });
  }

  onSubmit() {
    console.log('form', this.formLogin);
    if (this.formLogin.valid) {
      this.http.getUser(this.formLogin.value).subscribe(
        (response) => {
          if (!!response[0]) {
            /*Беремо користувача і вкладаєм в локальну історію браузера*/
            localStorage.setItem('user', JSON.stringify(response));
            this.router.navigate(['/task']);
          } else {
            this.errorLogin = true;
          }

          console.log();

        },
        (error) => {
          this.errorLogin = true;
          console.log(error);
        });

    }
  }

}
