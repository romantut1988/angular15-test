import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material-Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    localStorage.clear();
  }
  constructor(private service: UserService, private route: Router) {}

  respdata: any;

  ProdceedLogin(logindata: any) {
    if (logindata.valid) {
      this.service.ProceedLogin(logindata.value).subscribe((item) => {
        this.respdata = item;
        if (this.respdata != null) {
          localStorage.setItem('token', this.respdata.jtwToken);
          this.route.navigate(['home']);
        } else {
          alert('Login Failed');
        }
      });
    }
  }
  RedirectRegister() {
    this.route.navigate(['acces/register']);
  }
}
