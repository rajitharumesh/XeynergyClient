import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  user: User = new User();
  userId = 0;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRouter.params.subscribe((data) => {
      this.userId = data.id;
      this.retrieveUser(this.userId);
    });
  }

  retrieveUser(id: number): void {
    this.userService.getUserById(id).subscribe(
      (data) => {
        this.user = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
