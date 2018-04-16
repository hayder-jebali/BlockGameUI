import { Component, OnInit, NgZone } from '@angular/core';
import { WecoinService } from '../../services/wecoin.service';
// declare let web3: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  walletAddress: string = "Refreshing...";
  walletBalance: string = "Refreshing...";
  isConnectedToBlockchain = false;

  constructor(private wecoinService: WecoinService, private ngZone: NgZone) { }

  ngOnInit() {    
    console.clear();
    if(this.wecoinService.isConnectedToBlockchain()){
      this.isConnectedToBlockchain = true;
      this.walletAddress = this.wecoinService.getAccount();
      this.wecoinService.getBalance( (balance: number) => {
        this.ngZone.run( () => {
          var affineBalance = balance / 10000;          
          this.walletBalance = String(affineBalance);
        });
      });
    }
    else{
      this.isConnectedToBlockchain = false;
    }

  }
  

}
