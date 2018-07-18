import { Component, OnInit, ViewContainerRef, NgModule } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule, ActivatedRoute} from '@angular/router';
import { UtilService } from '../../util/util.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any = {
    email:"",
    password:""
  }
  constructor(private authenticationService:AuthenticationService, private router: Router, private utilService:UtilService) {}

  ngOnInit() {}

  login(){
    var response = this.authenticationService.authenticateUser(this.user);
    if(response==="success"){
      this.router.navigate(['dashboard']);
    }
    else{
      this.utilService.notifyMsg('danger', 'Invalid Email or Password.');
    }
  }  
}
