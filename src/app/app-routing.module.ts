import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page'; // Import the 'Tab1Page' component
import { Tab2Page } from './tab2/tab2.page'; // Import the 'Tab2Page' component

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  { path: 'tab1', component: Tab1Page },
  { path: 'tab2', component: Tab2Page },
  {
    path: 'tipspage',
    loadChildren: () =>
      import('./tipspage/tipspage.module').then((m) => m.TipspagePageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
