import { Component, ViewContainerRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, RoutesRecognized } from '@angular/router';
import { AppState } from './app.service';
import { Subscription } from 'rxjs/Subscription'

// import './app.style.css'
// import './energy-monitor.svg.style.css'

declare var $: any;
declare var _: any;

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  // styles: [
  //   require('./app.style.css'),
  //   require('./energy-monitor.svg.style.css')
  // ],
  styleUrls: [
    './app.style.css'
  ],
  templateUrl: './app.template.html',
})
export class AppComponent {
  routerSub: Subscription;

  constructor(
    public appState: AppState, private router: Router, route: ActivatedRoute, public viewContainerRef: ViewContainerRef) {

    this.routerSub = router.events.subscribe(event => {
      // console.info(event)
      if (event instanceof NavigationStart) {
      }
      else if (event instanceof RoutesRecognized) {
        // console.log(event.state)
        // console.log(event.state._root)
        // console.log(event.state.root.params)
      }
      // if(!oauthService.hasValidAccessToken()) {
      //   this.oauthService.initImplicitFlow();
      // }
      else if (event instanceof NavigationEnd) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    })
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

}
