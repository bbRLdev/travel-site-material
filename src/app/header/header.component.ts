import { Component, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Output('sideNavToggleTarget') sideNavToggle = new EventEmitter<void>();

  onToggleSideNav() {
    this.sideNavToggle.emit();

  }


  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {


  }



}
