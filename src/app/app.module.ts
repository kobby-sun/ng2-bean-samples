import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { XHRBackend, RequestOptions } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

//## Shared ui components from ng2-bean
import {
  NumeralPipe,
  MomentPipe,
  TableExpandable,
  TableStackable,
  UIDropdown,
  UIAccordion,
  TAB_DIRECTIVES,
  DTPICKER_DIRECTIVES,
  UIWizardModule,
  UISelectComponent,
  ToggleComponent,
  CheckboxComponent,
  UILoaderComponent,
  UISearchComponent,
  UIFormComponent, UIFormControlComponent, UIFormFieldComponent,
  UIMiniChartComponent,
  UIFuseSearchComponent,
  UIInputComponent,
  AddressComponent
} from './ng2-bean';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';

import { Samples } from './samples';

// import { AUTH_PROVIDERS } from 'angular2-jwt';

import { appConfig } from './app-config'

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: any,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

const declarations = [
  //pages
  AppComponent, Samples,
  //ng2-bean components
  UISelectComponent, ToggleComponent, CheckboxComponent, UILoaderComponent,
  UIFormComponent, UIFormControlComponent, UIFormFieldComponent, UIFuseSearchComponent,
  UISearchComponent, TAB_DIRECTIVES, UIMiniChartComponent, UIInputComponent, AddressComponent,
  //Validators
  //directives
  DTPICKER_DIRECTIVES, TableExpandable, TableStackable,
  UIDropdown, UIAccordion,
  // StoreLogMonitorComponent,
  //pipes
  NumeralPipe, MomentPipe
]

const providers = [
  AppState,
  // BootstrapModalModule.getProviders(),
  ...ENV_PROVIDERS,
  // ...AUTH_PROVIDERS,
  ...APP_RESOLVER_PROVIDERS,
  MockBackend
  // ...provideStore(APP_REDUCERS),
  // ...instrumentStore({
  //     monitor: useLogMonitor({
  //         visible: false,
  //         position: 'right'
  //     })
  // })
]

const imports = [
  BrowserModule,
  // @Router
  RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  // @Forms
  FormsModule, ReactiveFormsModule,
  // @HTTP
  HttpModule, JsonpModule,
  // @Modal
  // ModalModule.forRoot(),
  // BootstrapModalModule,
  // VexModalModule,
  // @UI
  UIWizardModule
  // NgSemanticModule,
  // Google Map
  // AgmCoreModule.forRoot({
  //     apiKey: 'AIzaSyCSLT4uG0XuEI0-DMBE0r0lEF0-IxrHHik'
  // }), 
]

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: declarations,
  imports: imports,
  providers: providers
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) { }

  public hmrOnInit(store: StoreType) {
    // if (!store || !store.state) {
    //   return;
    // }
    // console.log('HMR store', JSON.stringify(store, null, 2));
    // // set state
    // this.appState._state = store.state;
    // // set input values
    // if ('restoreInputValues' in store) {
    //   let restoreInputValues = store.restoreInputValues;
    //   setTimeout(restoreInputValues);
    // }

    // this.appRef.tick();
    // delete store.state;
    // delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    // const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // // save state
    // const state = this.appState._state;
    // store.state = state;
    // // recreate root elements
    // store.disposeOldHosts = createNewHosts(cmpLocation);
    // // save input values
    // store.restoreInputValues  = createInputTransfer();
    // // remove styles
    // removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // // display new elements
    // store.disposeOldHosts();
    // delete store.disposeOldHosts;
  }

}
