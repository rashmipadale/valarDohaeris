import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CardIssuerComponent } from './components/card-issuer/card-issuer.component';
import { AccountLinkerComponent } from './components/account-linker/account-linker.component';
import { FundApproverComponent } from './components/fund-approver/fund-approver.component';
import { LinkApproverComponent } from './components/link-approver/link-approver.component';

export const AppRoutes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent,
        children: [
          { path: "", redirectTo: "summary", pathMatch: "full" },
          {path: 'summary', component: SummaryComponent}, 
          {path: 'cardissuer', component: CardIssuerComponent}, 
          {path: 'acclink', component: AccountLinkerComponent}, 
          {path: 'fundapprove', component: FundApproverComponent}, 
          {path: 'linkapprove', component: LinkApproverComponent}
        ]
    }
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);