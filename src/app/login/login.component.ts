import { Component, OnInit } from '@angular/core';
import { BankRestserviceService } from '../bank-restservice.service';
//import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public rest: BankRestserviceService, private route: ActivatedRoute, private router: Router) { }
  username: string;
  password: string;
  name:string;
  accounts:any = [];

  ngOnInit(): void {
    //this.getAccountName() ;
  }
  getAccountName() {
    this.accounts = [];
    this.rest.getAccount(this.username).subscribe((data: {}) => {
      console.log(data);

      
      this.accounts = data;
      this.name = JSON.stringify(this.accounts.account_no);
      this.name = JSON.stringify(this.accounts.account_no);
    //if (this.username == this.accounts.name && this.password == 'admin') {
      if (this.username == this.accounts.name && this.username != null) {
      this.router.navigate(['/user/'+this.accounts.name]);
    } else {
      alert("Invalid credentials");
    }
    
    });
  }
  login(): void {

    this.getAccountName() ;
    console.log(this.accounts.account_no);
   
  }
}

