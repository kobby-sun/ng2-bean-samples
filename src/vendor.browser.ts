// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// AngularClass
// import '@angularclass/webpack-toolkit';
// import '@angularclass/request-idle-callback';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import 'lodash'
import 'jquery/dist/jquery';
import 'moment/moment';
import 'moment-timezone/moment-timezone';
import 'bootstrap/dist/js/bootstrap';
import 'daterangepicker/daterangepicker';

// require("./assets/js/jquery.mousewheel.min")($);
// require("./assets/js/jquery.datetimepicker.min")($);

// require('imports?jQuery=jquery,$=jquery,this=>window!./assets/js/jquery.mousewheel.min'); 

// require('imports?jQuery=jquery,$=jquery,jquery-mousewheel=mousewheel,this=>window!./assets/js/jquery.datetimepicker.min')(mousewheel); 

// import './assets/js/jquery.mousewheel.min';
// import './assets/js/jquery.datetimepicker.min';

import 'bootstrap-toggle/js/bootstrap-toggle.min';
import 'bootstrap-switch/dist/js/bootstrap-switch.min';
import 'bootstrap_dropdowns_enhancement/dist/js/dropdowns-enhancement';
import 'select2/dist/js/select2.min';
import 'semantic-ui/dist/semantic.min';
import 'nprogress/nprogress';
// import 'toastr/build/toastr.min';
import 'rxjs/bundles/rx.min';
import 'peity/jquery.peity.min';

if ('production' === ENV) {
  // Production


} else {
  // Development
  require('angular2-hmr');

}
