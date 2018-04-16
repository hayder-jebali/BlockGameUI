import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RankComponent } from '../../components/rank/rank.component';
import { AccountComponent } from '../../components/account/account.component';
import { GuideComponent } from '../../components/guide/guide.component';
import { SendComponent } from '../../components/send/send.component';

const routes: Routes = [
  {path: 'rank', component: RankComponent },
  {path: 'guide', component: GuideComponent },
  {path: 'account', component: AccountComponent },
  {path: 'send', component: SendComponent },
  {path: '', component: GuideComponent, pathMatch: "full" },
  {path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RouteModule { }
