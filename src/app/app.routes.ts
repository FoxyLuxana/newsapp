import { Routes } from '@angular/router';
import { HeadlinesComponent } from './headlines/component/headlines/headlines.component';

export const routes: Routes = [

    { path: '', component: HeadlinesComponent },
    { path: ':category', component: HeadlinesComponent }
];
