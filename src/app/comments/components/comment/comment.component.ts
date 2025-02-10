import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommentInterface } from "../types/comment.interface";
import { ActiveCommentTypeEnum } from '../types/activeCommentType.enum';
import { ActiveCommentInterface } from '../types/activeComment.interface';

@Component({
  selector : 'comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit{
  @Input() currentUserId! :string;
  @Input() comment! : CommentInterface;
  @Input() replies!: CommentInterface[]
  @Input() activeComment! : ActiveCommentInterface | null;
  @Input() parentId: string | null = null;

  @Output() setActiveComment = new EventEmitter<ActiveCommentInterface | null>();
  @Output() deleteComment = new EventEmitter<string>();
  @Output() addComment = new EventEmitter<{ text: string; parentId: string | null }>();
  @Output() updateComment = new EventEmitter<{ text: string; commentId: string }>();

canReply: boolean = false;
canEdit: boolean = false;
canDelete: boolean = false;
ActiveCommentType = ActiveCommentTypeEnum
replyId:string | null = null;
createAt: string = '';

ngOnInit(): void {

  const fiveMinutes = 300000;
  const timePassed = new Date().getMilliseconds() - new Date(this.comment.createAt).
  getMilliseconds() > fiveMinutes;
  this.createAt = new Date(this.comment.createAt).toLocaleDateString();
 this.canReply = Boolean(this.currentUserId);
  this.canEdit  = this.currentUserId === this.comment.userId && !timePassed && this.replies.length === 0;
  this.canDelete = this.currentUserId === this.comment.userId && !timePassed
  this.replyId = this.parentId ? this.parentId : this.comment.id;
}

isReplying():boolean{
if(!this.activeComment)
  return false

return this.activeComment.id === this.comment.id && this.activeComment.type === this.ActiveCommentType.replying
}
isEditing(): boolean {
  if (!this.activeComment) {
    return false;
  }
  return (
    this.activeComment.id === this.comment.id &&
    this.activeComment.type === 'editing'
  );
}

}
