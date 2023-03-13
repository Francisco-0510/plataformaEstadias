import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, */
  /* {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, */
  {
    path: '',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  /* {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
 */  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login-admin-tutor',
    loadChildren: () => import('./pages/login-admin-tutor/login-admin-tutor.module').then( m => m.LoginAdminTutorPageModule)
  },
  {
    path: 'recover-ppass',
    loadChildren: () => import('./pages/recover-ppass/recover-ppass.module').then( m => m.RecoverPPassPageModule)
  },
  {
    path: 'lista-actividades',
    loadChildren: () => import('./client/lista-actividades/lista-actividades.module').then( m => m.ListaActividadesPageModule)
  },
  {
    path: 'detalle-actividad',
    loadChildren: () => import('./client/detalle-actividad/detalle-actividad.module').then( m => m.DetalleActividadPageModule)
  },
  {
    path: 'comunidad',
    loadChildren: () => import('./client/comunidad/comunidad.module').then( m => m.ComunidadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
