import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsService } from './services/comments.service';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/commentForm/commentForm.component';
import {ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommentsComponent,CommentComponent,CommentFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CommentsComponent,],
  providers:[CommentsService],
})
export class CommentsModule { }
