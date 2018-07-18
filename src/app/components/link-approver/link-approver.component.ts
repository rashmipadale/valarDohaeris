import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-link-approver',
  templateUrl: './link-approver.component.html',
  styleUrls: ['./link-approver.component.css']
})
export class LinkApproverComponent implements OnInit {

  user:any;
  linkRequests:any[] = [
    {
      name:"Mr. Suresh",
      number:"0054 2323 4567",
      type:"Saving"
    },
    {
      name:"Mr. Ramesh",
      number:"0034 1211 9876",
      type:"Current"
    }
  ];
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.user = this.authenticationService.getLoggedInUser();
  }

}
