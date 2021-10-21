import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { ConnexGuard } from './guards/connex.guard';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/games/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'games',
    loadChildren: () => import('./pages/pages.module')
      .then(mod => mod.PagesModule)
  },
  {
    path: '*',
    redirectTo: ''
  }
];

// const routes: Routes = [
//   {
//     path: '',
//     component: WelcomeComponent
//   },
// ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, // <-- debugging purposes only
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
