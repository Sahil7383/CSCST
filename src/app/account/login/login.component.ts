import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    private service: LoginService
  ) // private toastr: ToastrService
  {}

  ngOnInit(): void {
    this.loginForm.reset();
  }

  alert: boolean = false;

  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
  });

  Login() {
    this.service.CustomerLogin(this.loginForm.value).subscribe((res: any) => {
      if (res.statusCode == 200) {
        // this.toastr.success('Success', res.messeage);
        this.loginForm.reset();
      } else if (res.statusCode == 400) {
        // this.toastr.error('Error', res.messeage);
      }
    });
  }
}
