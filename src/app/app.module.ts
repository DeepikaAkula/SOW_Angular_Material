import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardComponent } from './guards/AuthGuard/auth-guard/auth-guard.component';
import { CanDeactivateGuardComponent } from './guards/CanDeactivateGuard/can-deactivate-guard/can-deactivate-guard.component';
import { HeaderComponent } from './header/header.component';
import { SecurityComponent } from './shared/Common/security/security.component';
import { ServerDownComponent } from './shared/Common/server-down/server-down.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthGuardComponent,
    CanDeactivateGuardComponent,
    HeaderComponent,
    SecurityComponent,
    ServerDownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
