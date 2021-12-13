import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { DramaService } from './services/drama/drama.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { DramaViewComponent } from './drama-view/drama-view.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewDramaComponent } from './new-drama/new-drama.component';
import { EditDramaComponent } from './edit-drama/edit-drama.component';
import { CommentDramaComponent } from './comment-drama/comment-drama.component';
import { TableCommentsComponent } from './table-comments/table-comments.component';
import { RowCommentsComponent } from './row-comments/row-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    TableComponent,
    CardComponent,
    HeaderComponent,
    AuthComponent,
    DramaViewComponent,
    ErrorViewComponent,
    NewDramaComponent,
    EditDramaComponent,
    CommentDramaComponent,
    TableCommentsComponent,
    RowCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DramaService, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
