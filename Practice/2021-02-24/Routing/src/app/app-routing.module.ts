import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';


const routes: Routes = [
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { 
    path: 'users', 
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) 
  },
  { 
    path: 'products', 
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) 
  }, 
  { 
    path: 'cms', 
    loadChildren: () => import('./modules/cms/cms.module').then(m => m.CmsModule) 
  },
  { 
    path: 'account', 
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) 
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
