import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Posts } from 'src/app/shared/models/Posts';
import { v4 as uuidv4 } from 'uuid';
import { PostsListComponent } from '../posts-list/posts-list.component';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  @ViewChild("PostListComponent", {static : true}) PostListComponent! : PostsListComponent;
  public edit: boolean = false;
  public form: FormGroup = this.fb.group({
    id: [],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  posts: Posts[] = [];
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.form.get('id')?.setValue(uuidv4());
    let post: Posts = new Posts(this.form.value);
    this.posts.push(post);
    this.resetForm();
  }

  onDeletePost(post: Posts){
    this.posts = this.posts.filter(x => x.id !== post.id);
  }

  onEditPost(post: Posts){
    this.edit = true;
    this.form.setValue(post);
  }

  onEdit(){
    let id: string = this.form.get('id')?.value;
    let index: number = this.posts.findIndex(x => x.id === id);
    this.posts[index].title = this.form.get('title')?.value;
    this.posts[index].description = this.form.get('description')?.value;
    this.resetForm();
    this.PostListComponent.isEditing = false;
  }

  resetForm(){
    this.form.reset();
    this.edit = false;
    this.PostListComponent.isEditing = false;
  }
}
