import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
togleActive: any= {
  home: false,
  equipment:false
};
  constructor() { }

  ngOnInit() {
  }

  onSideBarClick(){}
  clickTab(item){
    console.log('item', this.togleActive);
    
    this.togleActive[item] = !this.togleActive[item];       
}
}
