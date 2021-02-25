import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
import { UrlAuthenticationGuard } from './core/services/canActivateAuth/url-authentication.guard';


const routes: Routes = [
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { 
    path: 'users', 
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) ,
    canActivate:[UrlAuthenticationGuard]
  },
  { 
    path: 'products', 
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    canActivate:[UrlAuthenticationGuard]
  }, 
  { 
    path: 'cms', 
    loadChildren: () => import('./modules/cms/cms.module').then(m => m.CmsModule) ,
    canActivate:[UrlAuthenticationGuard]
  },
  { 
    path: 'account', 
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule),
    canActivate:[UrlAuthenticationGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  { path: '**',
    component:PageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
