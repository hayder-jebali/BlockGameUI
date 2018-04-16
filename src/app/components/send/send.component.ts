import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { WecoinService } from '../../services/wecoin.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

@ViewChild('sendform') sendform: any;

  walletAddress: string;
  amount: number;
  data: string;

  constructor(private wecoinService: WecoinService, private snackBar: MatSnackBar,private ngZone: NgZone) { }

  isConnectedToBlockchain = false;

  ngOnInit() {
    this.isConnectedToBlockchain = this.wecoinService.isConnectedToBlockchain();
  }

  send(){
      this.wecoinService.transfer(this.walletAddress,this.amount * Math.pow(10,18),(txHash) => {
        this.ngZone.run( () => {
          let snackBarRef = this.snackBar.open('Transaction created.', 'Visualize', {
            duration: 5000
          });
  
          snackBarRef.onAction().subscribe(() => {
            window.location.href = "https://ropsten.etherscan.io/tx/" + txHash;
          });
        });

      });
  }

}
