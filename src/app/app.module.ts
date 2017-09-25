// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
// App Routes
import { APP_ROUTING } from './app.routes';
// ngrx modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// App components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
// App reducers
// import { reducer } from './common/reducers';
import { reducer } from './common/reducers/search.reducer';
// App effects
import { SearchEffects } from './common/effects';
// App services
import { SearchService } from './common/services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({search : reducer}),
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
