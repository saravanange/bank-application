import { Component, OnInit } from '@angular/core';
import { BankRestserviceService } from '../bank-restservice.service';
//import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(public rest: BankRestserviceService, private route: ActivatedRoute, private router: Router) { }
  
  accounts:any = [];
  balance: number;
  ngOnInit(): void {


    this.rest.getAccount(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.accounts = data;
      this.balance = this.accounts.balance;
    
    });
    
  }
  updateAccount() {
   
    this.accounts.balance = Number(this.accounts.balance) + Number(this.balance);
   
    this.rest.updateAccount(this.route.snapshot.params['id'], this.accounts).subscribe((result) => {
      this.router.navigate(['/user/'+this.accounts.name]);
    }, (err) => {
      console.log(err);
    });
  }

}
