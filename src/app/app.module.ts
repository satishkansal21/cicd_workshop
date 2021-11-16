import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { CatDisplayModule } from './cat-display/cat-display.module';
import { LoginModule } from './login/login.module';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { CoreComponent } from './core/core.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateCatComponent,
    CoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AmplifyUIAngularModule,
    HttpClientModule,
    CatDisplayModule,
    LoginModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
