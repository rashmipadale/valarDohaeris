import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  private loggedInUser:any;
  users:any[] = [
    {
      name: "Rashmi Padale",      
      email:"rashmipadale@in.ibm.com",
      password:"Password01",
      role:"cardIssuer"
    },
    {
      name: "Tanmay Ambre",      
      email:"tanmay.ambre@in.ibm.com",
      password:"Password01",
      role:"govt"
    },
    {
      name: "Swanand Dhakane",      
      email:"swdhakan@in.ibm.com",
      password:"Password01",
      role:"otherBank"
    }
  ];
  constructor() { }

  authenticateUser(user){
    let response = "";
    for(let u of this.users){
      if(user.email === u.email){
        if(user.password === u.password){
          response="success";
          this.setLoggedInUser(u);
          break;
        }
        else{
          response="failure";
        }
      }
      else{
        response="failure";
      }
    }
    return response;
  }

  private setLoggedInUser(user){
    this.loggedInUser = user;
  };

  public getLoggedInUser(){
    return this.loggedInUser;
  };

}
