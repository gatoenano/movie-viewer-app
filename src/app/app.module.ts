// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
// routes
import { APP_ROUTING } from './app.routes';
// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// reducers
import { reducer } from './common/reducers';
// effects
import { SearchEffects } from './common/effects';
// services
import { SearchService } from './common/services';
// modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// components
import { AppComponent } from './app.component';
import {
  HomeComponent,
  NavbarComponent,
  SearchComponent,
  ItemsListComponent
 } from './components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    ItemsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({ rootReducer: reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),   //  Retains last 25 states
    EffectsModule.forRoot([SearchEffects]),
    NgbModule.forRoot(),
    APP_ROUTING
  ],
  providers: [
    SearchService,
    { provide: LOCALE_ID, useValue: 'en-Us' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
