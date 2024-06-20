import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TitleComponent } from './title/title.component';
import { GridComponent } from './grid/grid.component';
import { GridTileComponent } from './grid-tile/grid-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    GridComponent,
    GridTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
