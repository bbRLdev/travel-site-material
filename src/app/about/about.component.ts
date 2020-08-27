import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { GreetingDisplayComponent } from './greeting-display/greeting-display.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { WindowSizeService } from '../shared/window-size.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  // @ViewChild(PlaceholderDirective) greetingHost: PlaceholderDirective;


  constructor(private componentFactoryResolver: ComponentFactoryResolver, private windowSizeService: WindowSizeService) { }

  ngOnInit(): void {
    console.log('hi');


  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit() {
    this.windowSizeService.getWindowResize().subscribe(() => {
      
    }); 

  }

  

  // private showGreetingComponent() {
  //   const greetingCmpFactory = this.componentFactoryResolver.resolveComponentFactory(GreetingDisplayComponent);
  //   const hostVCref = this.greetingHost.vcRef;
  //   hostVCref.clear();
  //   const compRef = hostVCref.createComponent(greetingCmpFactory);
  // }

}
