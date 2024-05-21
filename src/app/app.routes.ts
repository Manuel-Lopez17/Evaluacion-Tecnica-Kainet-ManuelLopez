import { Routes } from '@angular/router'
import { PageOneComponent } from './page-one/page-one.component'
import { PageTwoComponent } from './page-two/page-two.component'
import { PageThreeComponent } from './page-three/page-three.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

export const routes: Routes = [
  {
    path: 'page-one',
    component: PageOneComponent,
  },
  {
    path: 'page-two',
    component: PageTwoComponent,
  },
  {
    path: 'page-three',
    component: PageThreeComponent,
  },
  {
    path: '',
    redirectTo: '/page-one',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
]
