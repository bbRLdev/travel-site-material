import { Component, OnInit, OnDestroy} from '@angular/core';
import { WindowSizeService } from '../shared/window-size.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  smallLayout: boolean = false;
  private resizeSub: Subscription;
  private initResizeSub: Subscription;
  

  constructor(private resizeService: WindowSizeService) { }

  ngOnInit(): void {
    this.initResizeSub = this.resizeService.getInitWindowSize().subscribe((windowWidth: number) => {
      this.smallLayout = windowWidth < 600 ? true: false;

    });
    this.resizeSub = this.resizeService.getWindowResize().subscribe((windowWidth: number) => {
      this.smallLayout = windowWidth < 600 ? true: false;
    });

  }

  ngOnDestroy() {
    this.initResizeSub.unsubscribe();
    this.resizeSub.unsubscribe();
  }




}
