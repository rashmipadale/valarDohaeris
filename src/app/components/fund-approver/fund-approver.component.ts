import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-fund-approver',
  templateUrl: './fund-approver.component.html',
  styleUrls: ['./fund-approver.component.css']
})
export class FundApproverComponent implements OnInit {

  user:any;
  fundRequests:any[] = [
    {
      name:"Mr. Suresh",
      bio:"data1",
      amount:"$200"
    },
    {
      name:"Mr. Ramesh",
      bio:"data2",
      amount:"$500"
    }
  ];
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.user = this.authenticationService.getLoggedInUser();
  }

}
