import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorpageComponent } from './views/errorpage/errorpage.component';
import { LoginComponent } from './views/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './views/signup/signup.component';
import { ProductsComponent } from './views/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorpageComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
