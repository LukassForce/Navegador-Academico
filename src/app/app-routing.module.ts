import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { HorarioScreenComponent } from './screens/horario-screen/horario-screen.component';
import { CalendarioScreenComponent } from './screens/calendario-screen/calendario-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { ChatScreenComponent } from './screens/chat-screen/chat-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'horario', component: HorarioScreenComponent},
  { path: 'calendario', component: CalendarioScreenComponent},
  { path: 'login', component: LoginScreenComponent },
  { path: 'chat', component: ChatScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
