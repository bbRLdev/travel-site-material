import { Component, OnInit, OnDestroy, AfterViewInit, HostListener, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowSizeService } from 'src/app/shared/window-size.service';

@Component({
  selector: 'app-greeting-display',
  templateUrl: './greeting-display.component.html',
  styleUrls: ['./greeting-display.component.css']
})
export class GreetingDisplayComponent implements OnInit, OnDestroy, AfterContentInit {
  smallLayout: boolean;
  private resizeSub: Subscription;
  private initSizeSub: Subscription;

  constructor(private resizeService: WindowSizeService) { }

  ngOnInit(): void {
    this.initSizeSub = this.resizeService.getInitWindowSize().subscribe((windowWidth: number) => {
      this.smallLayout = windowWidth < 960 ? true: false;
    });
    this.resizeSub = this.resizeService.getWindowResize().subscribe((windowWidth: number) => {
      this.smallLayout = windowWidth < 960 ? true: false;
    });

  }



  ngAfterContentInit() {
    this.smallLayout = this.resizeService.getCurWidth() < 960 ? true : false;
  }

  // @HostListener('window:load', ['$event']) onLoad(e: Event): void {
  //   const window: EventTarget = e.currentTarget;
  //   this.smallLayout = (window as Window).innerWidth < 960 ? true: false;
  //   console.log(this.smallLayout);
  // }

  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
    this.initSizeSub.unsubscribe();

  }

}
