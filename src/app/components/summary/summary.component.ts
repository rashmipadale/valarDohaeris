import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  user:any;
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.loadScript("../../../assets/demo/demo.js");
    this.loadScript("../../../assets/demo/initiateDemo.js");
    this.user = this.authenticationService.getLoggedInUser();
  }

  loadScript(src){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
