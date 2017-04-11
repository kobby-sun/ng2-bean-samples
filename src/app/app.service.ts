import { Injectable } from '@angular/core';
import { HmrState } from 'angular2-hmr';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Entity } from './ng2-bean';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

declare var $: any;
declare var _: any;

@Injectable()
export class AppState {
  // @HmrState() is used by HMR to track the state of any object during HMR (hot module replacement)
  @HmrState() _state = new Entity();

  private _colSize: string;
  private _colSize$: Subject<string>;
  private _colSizeObserver: any;

  private _colWidth: number;
  private _colWidth$: Subject<number>;
  private _colWidthObserver: any;

  constructor(private http: Http) {
    this._colSize$ = <Subject<string>>new Subject();
    this._colWidth$ = <Subject<number>>new Subject();

    //internal observer
    this._colSizeObserver = this._colSize$.subscribe(
      x => { this._colSize = x; }
    );
    this._colWidthObserver = this._colWidth$.subscribe(
      x => { this._colWidth = x; }
    );

    this.hookupResizeEvent();
  }

  get colSizeVal() {
    return this._colSize;
  }

  get colSize() {
    return this._colSize$.asObservable();
  }

  get colWidthVal() {
    return this._colWidth;
  }

  get colWidth() {
    return this._colWidth$.asObservable();
  }

  get(prop?: any) {
    // use our state getter for the clone
    return this._state.get(prop)
  }

  set(prop: string, value: any) {
    this._state.set(prop, value)
  }

  private hookupResizeEvent() {
    let self = this;
    let resize = () => {
      let winWidth = $(window).width();
      self._colWidth$.next(winWidth);

      if (winWidth < 768) {
        if (self._colSize != 'xs') {
          self._colSize$.next('xs');
          // console.log('Window Width: ' + winWidth + ' class used: col-xs');
        }
      } else if (winWidth <= 991) {
        if (self._colSize != 'sm') {
          self._colSize$.next('sm');
          // console.log('Window Width: ' + winWidth + ' class used: col-sm');
        }
      } else if (winWidth <= 1199) {
        if (self._colSize != 'md') {
          self._colSize$.next('md');
          // console.log('Window Width: ' + winWidth + ' class used: col-md');
        }
      } else {
        if (self._colSize != 'lg') {
          self._colSize$.next('lg');
          // console.log('Window Width: ' + winWidth + ' class used: col-lg');
        }
      }
    }

    $(window).on('resize', resize);
    $(window).ready(resize);
  }
}
