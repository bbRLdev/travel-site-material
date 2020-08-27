import { Injectable} from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import {map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {
  resizeObservable: Observable<number>;
  onloadObservable: Observable<number>;
  private curWidth: number;
  

  constructor() {
    this.resizeObservable = fromEvent<UIEvent>(window, 'resize').pipe(map((e: UIEvent) => event.target), map((target: Window) => {
      this.curWidth = target.innerWidth;
      return target.innerWidth;
    }));
    this.onloadObservable = fromEvent<Event>(window, 'load').pipe(
      map((e: Event) => {
        const window = e.currentTarget as Window;
        return window;
      }),
      map((w: Window) => {
        this.curWidth = w.innerWidth;
        return w.innerWidth;
      })
    );
  }

  getCurWidth() {
    return this.curWidth;
  }


  getWindowResize() {
    return this.resizeObservable;
  }

  getInitWindowSize() {
    return this.onloadObservable;
    
  }
}