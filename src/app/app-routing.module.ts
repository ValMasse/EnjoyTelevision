import { CommentDramaComponent } from './comment-drama/comment-drama.component';
import { EditDramaComponent } from './edit-drama/edit-drama.component';
import { NewDramaComponent } from './new-drama/new-drama.component';
import { CardComponent } from './card/card.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { DramaViewComponent } from './drama-view/drama-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';


const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'drama/new', canActivate: [AuthGuardService], component: NewDramaComponent },
  { path: 'drama/edit/:id', canActivate: [AuthGuardService], component: EditDramaComponent },
  { path: 'drama/comments/:id', canActivate: [AuthGuardService], component: CommentDramaComponent },
  { path: 'drama/:id', canActivate: [AuthGuardService], component: CardComponent },
  { path: 'dramas', canActivate: [AuthGuardService], component: DramaViewComponent },
  { path: '', canActivate: [AuthGuardService], component: DramaViewComponent },
  { path: 'not-found', component: ErrorViewComponent },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
