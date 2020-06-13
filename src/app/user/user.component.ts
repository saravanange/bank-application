import { Component, OnInit } from '@angular/core';
import { BankRestserviceService } from '../bank-restservice.service';
//import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public rest: BankRestserviceService, private route: ActivatedRoute, private router: Router) { }
  username: string;
  password: string;
  accounts:any = [];

  ngOnInit(): void {
   
    this.accounts = [];
    this.rest.getAccount(this.route.snapshot.params['name']).subscribe((data: {}) => {
      console.log(data);
       
      this.accounts = data;
      
    });
  }
  deposit(id) {
    this.router.navigate(['/deposit/:'+id]);
    

  }
  
  add(){

  }
}
