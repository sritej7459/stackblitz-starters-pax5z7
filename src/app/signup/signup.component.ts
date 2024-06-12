import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupFormModel = {
    name: '',
    age: null,
    address: '',
    phone: '',
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  signup() {
    // Implement signup logic here
    // Example: validate signupFormModel fields
    // If valid, navigate to dashboard
    this.router.navigate(['/dashboard']);
  }
}
