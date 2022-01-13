import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  userList: User[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.retrieveUserList();
  }

  retrieveUserList(): void {
    this.userService.getUserList().subscribe(
      (data) => {
        this.userList = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
