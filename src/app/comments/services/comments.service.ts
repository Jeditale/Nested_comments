import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommentInterface } from "../components/types/comment.interface";
import { HttpClient} from '@angular/common/http'

@Injectable()
export class CommentsService{
  constructor(private httpClient: HttpClient){ }

  getComment(): Observable<CommentInterface[]>{
    return this.httpClient.get<CommentInterface[]>('http://localhost:3000/comments');
  }

  createComment(text: string ,parentId: null|string):Observable<CommentInterface>{
    return this.httpClient.post<CommentInterface>('http://localhost:3000/comments',{
      body:text,
      parentId,
      // mocked should be remove when add backend
      createAt: new Date().toISOString(),
      username: 'jayz',
      userId: '1',
    })

  }
  updateComment(id: string, text: string): Observable<CommentInterface> {
    return this.httpClient.patch<CommentInterface>(
      `http://localhost:3000/comments/${id}`,
      {
        body: text,
      }
    );
  }

  deleteComment(id: string): Observable<{}> {
    return this.httpClient.delete(`http://localhost:3000/comments/${id}`);
  }
}
