import { Component, OnInit, Input } from '@angular/core';
import { BankRestserviceService } from '../bank-restservice.service';
//import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-openaccount',
  templateUrl: './openaccount.component.html',
  styleUrls: ['./openaccount.component.css']
})
export class OpenaccountComponent implements OnInit {

  constructor(public rest: BankRestserviceService, private route: ActivatedRoute, private router: Router) { }
  
  @Input() accounts = { account_no:'', balance: 0, account_type:'',name:'',password:''};

  ngOnInit(): void {
  }
  register() : void {
    
    //this.router.navigate(["/register"]);
    this.rest.addAccount(this.accounts).subscribe((result) => {
      alert("Account successfully Created..!");
      alert(result);
      this.router.navigate(['/login']);
    }, (err) => {
      console.log(err);
    });
  }
  
 
}
