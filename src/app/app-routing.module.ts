import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';
import { RedirectPrivateGuard } from './core/guards/redirect-private.guard';

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full'},
  {
    path: 'public', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule),
    canActivate: [RedirectPrivateGuard], canLoad: [RedirectPrivateGuard]
  },
  {
    path: 'private', loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule),
    canActivate: [LoginGuard], canLoad: [LoginGuard]
  },
  { path: '**', redirectTo: 'public', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
