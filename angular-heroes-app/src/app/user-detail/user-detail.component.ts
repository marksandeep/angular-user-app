import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GitUserDetail, User } from '../user' ;
import { UserService } from '../services/user.service';
// import { Route } from '@angular/compiler/src/core';

// hr 59c5324

// pile 
// eicher hr69c5324

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {

    @Input() selectedUser: User;
    user: GitUserDetail;
    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private currentRoute: Router,
        private location: Location
        ) {}

    ngOnInit(): void {
        // this.getHero();
        this.getUserDetails();
    }
        
    // getHero(): void {
    //     const id = +this.route.snapshot.paramMap.get('id');
    //     this.userService.getHero(id)
    //         .subscribe(user => this.user = user);
    // }
    getUserDetails(): void {
        const loginName = (this.route.snapshot.url[1].path);
        this.userService.getUserDetailFromGithub(loginName).subscribe(USERDATA => this.user = USERDATA);
    }
    goBack(): void {
        this.location.back();
      } 
}
