import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  @Input('sidenav') sidenav;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.sidenav.toggle();
  }

}
