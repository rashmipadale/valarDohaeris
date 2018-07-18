import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UtilService } from '../../util/util.service';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-card-issuer',
  templateUrl: './card-issuer.component.html',
  styleUrls: ['./card-issuer.component.css']
})
export class CardIssuerComponent implements OnInit {

  user:any;
  verified:boolean = false;

  constructor(private authenticationService:AuthenticationService, private utilService:UtilService) { }

  ngOnInit() {
    this.user = this.authenticationService.getLoggedInUser();
  }

  biometricVerified(){   
    this.utilService.notifyMsg('success', 'Identity verified successfully.')
    $("#biometricBox").addClass("removed-item").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      $("#biometricBox").remove();      
    });    
    setTimeout(()=>{ 
      this.verified = true;
    }, 300);
  }

  proceed(){
    this.utilService.notifyMsg('success', 'Card generated successfully.');
  }
}
