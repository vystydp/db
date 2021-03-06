import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
