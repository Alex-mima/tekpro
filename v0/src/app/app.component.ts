import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'v0';
  constructor(private post: PostService, private happti: HttpClient) {}
}
