import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { UtilService } from './util/util.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CardIssuerComponent } from './components/card-issuer/card-issuer.component';
import { AccountLinkerComponent } from './components/account-linker/account-linker.component';
import { FundApproverComponent } from './components/fund-approver/fund-approver.component';
import { LinkApproverComponent } from './components/link-approver/link-approver.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SummaryComponent,
    CardIssuerComponent,
    AccountLinkerComponent,
    FundApproverComponent,
    LinkApproverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,    
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
