import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityNameFilterPipe } from '../pipe/city-name-filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortingFilterPipe } from '../pipe/sorting-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CityNameFilterPipe,
    SortingFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
