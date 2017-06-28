import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app.routing';

import { reducer } from './store/';
import { MountEffects } from './store/mount/mount.effects';

import { AppComponent } from './app.component';
import { MountsPageComponent } from './containers/mounts-page/mounts-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { MountService } from './services/mount.service';
import { WowApiService } from './services/wow-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MountsPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
     StoreModule.provideStore(reducer),

     /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    RouterStoreModule.connectRouter(),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    EffectsModule.run(MountEffects),

    /**
     * Routing
     */
     AppRoutingModule
  ],
  providers: [ MountService, WowApiService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
