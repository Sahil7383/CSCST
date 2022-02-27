import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm.reset();
  }

  registerForm = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.compose([Validators.required, Validators.email])],
    Password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],

    phoneNo: [
      '',
      Validators.compose([Validators.required, Validators.minLength(10)]),
    ],
    alternatePhoneNo: ['', Validators.compose([Validators.minLength(10)])],
  });

  AddNewUser() {
    // this.service.RegisterUser(this.registerForm.value).subscribe((res: any) => {
    //   if (res.statusCode == 200) {
    //     this.toastr.success('Success', res.messeage);
    //     this.registerForm.reset();
    //   } else if (res.statusCode == 400) {
    //     this.toastr.error('Error', res.messeage);
    //   }
    // });
  }
}
