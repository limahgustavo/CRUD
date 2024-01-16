import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/User'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    user: User = {
        name: '',
    };
    edit: boolean = false;
    
    constructor(
      private userService: UserService,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      ) {}
  
      ngOnInit() {
        let params = this.activatedRoute.snapshot.params;
        if (params['id']) {
          this.userService.getUser(params['id'])
            .subscribe(
              res => {
                console.log(res);
                this.user = res;
                this.edit = true;
              },
              err => console.log(err)
            )
        }
      } 

      submitUser() {
        this.userService.createUser(this.user)
          .subscribe(
            res => {
              console.log(res);
              this.router.navigate(['/']);
            },
            err => console.log(err)
          )
      }
    updateUser() {
      this.userService.updateUser(this.user.id ?? 0, this.user)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/user'])
          },
          err => console.log(err)
        )
    }
  
    
}

