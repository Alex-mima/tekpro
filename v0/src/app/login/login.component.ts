import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  signupForm: FormGroup;

  constructor(private post: PostService, private happti: HttpClient, private Route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }
  onLoadServer(id: number) {
    // complex calculation
    this.router.navigate(['/table'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }
  onSubmit() {
    console.log(this.signupForm);
  }
}
