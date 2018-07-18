import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  selectedMenu:string;
  constructor(private route: ActivatedRoute, private router: Router, private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.user = this.authenticationService.getLoggedInUser();
    if(this.user.role !== "otherBank"){
      this.selectedMenu = "dashboard";
      this.router.navigate(['dashboard/summary']);
    }
    else{
      this.selectedMenu = "linkapprove";
      this.router.navigate(['dashboard/linkapprove']);
    }
  }
  setMenu(menu){
    this.selectedMenu = menu;
  }
}
