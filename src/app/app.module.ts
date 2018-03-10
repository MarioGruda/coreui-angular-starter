import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import routing module
import { CoreModule } from './core';

import { AppRoutingModule } from './app.routing';
import { LoginModule } from './login';
import { DashboardModule } from './dashboard';
import { AboutModule } from './about';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, CoreModule, LoginModule, DashboardModule, AboutModule, AppRoutingModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
