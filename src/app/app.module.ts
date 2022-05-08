import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { HorarioScreenComponent } from './screens/horario-screen/horario-screen.component';
import { CalendarioScreenComponent } from './screens/calendario-screen/calendario-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { ChatScreenComponent } from './screens/chat-screen/chat-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeScreenComponent,
    HorarioScreenComponent,
    CalendarioScreenComponent,
    LoginScreenComponent,
    ChatScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
