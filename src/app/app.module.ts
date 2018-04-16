import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { RouteModule } from './modules/route/route.module';
import { RankComponent } from './components/rank/rank.component';
import { AccountComponent } from './components/account/account.component';
import { WecoinService } from './services/wecoin.service';
import { GuideComponent } from './components/guide/guide.component';
import { SendComponent } from './components/send/send.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    RankComponent,
    AccountComponent,
    GuideComponent,
    SendComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouteModule,
    FormsModule
  ],
  providers: [WecoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
