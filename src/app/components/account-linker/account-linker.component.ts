import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UtilService } from '../../util/util.service';
@Component({
  selector: 'app-account-linker',
  templateUrl: './account-linker.component.html',
  styleUrls: ['./account-linker.component.css']
})
export class AccountLinkerComponent implements OnInit {

  user:any;
  accounts:any[] = [
    {
      accNumber:"",
      accType:"",
      bank:"",
      ifsc:""
    }
  ];
  constructor(private authenticationService:AuthenticationService, private utilService:UtilService) { }

  ngOnInit() {
    this.user = this.authenticationService.getLoggedInUser();
  }

  addAccount(){
    var a = {
      accNumber:"",
      accType:"",
      bank:"",
      ifsc:""
    };
    this.accounts.push(a);
  }

  onTypeChange(evt){}

  onBankChange(evt){}

  removeAccount(evt, idx){
   this.accounts.splice(idx,1);
   //console.log(idx);
  }

  linkAccounts(){
    this.utilService.notifyMsg('success', 'Account linkings has been send for approvals. ');
  }

}
