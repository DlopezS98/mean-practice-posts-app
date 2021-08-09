import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Posts } from 'src/app/shared/models/Posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public isEditing: boolean = false;
  @Output() deletePost: EventEmitter<Posts> = new EventEmitter<Posts>();
  @Output() editPost: EventEmitter<Posts> = new EventEmitter<Posts>();
  @Input() posts: Posts[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onDeletePost(event: MouseEvent, post: Posts){
    event.stopPropagation();
    this.deletePost.emit(post);
  }

  onEditPost(event: MouseEvent, post: Posts){
    event.stopPropagation();
    this.isEditing = true;
    this.editPost.emit(post);
  }
}
