import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginFormModel = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  login() {
    // Implement login logic here
    // Example: validate loginFormModel.username and loginFormModel.password
    // If valid, navigate to dashboard
    if (
      this.loginFormModel.username === 'admin' &&
      this.loginFormModel.password === 'password'
    ) {
      this.router.navigate(['/dashboard']);
    } else {
      // Handle invalid credentials
      alert('Invalid username or password');
    }
  }
}
