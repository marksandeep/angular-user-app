import { Component, OnInit } from "@angular/core";
import { GitUser, User } from '../user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'dashboard-details',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    selectedUser: User;
    users: GitUser[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        // this.getUsers();
        this.getGituser();
    }

    // getUsers(): void {
    //     this.userService.getUsers().subscribe(USERS => this.users = USERS);
       
    // }

    getGituser(): void {
        this.userService.getUsersFromGithUb().subscribe(DATA => {
            this.users = DATA;
        });
    }
    
    onUserSelect(user: User): void {
        this.selectedUser = user;
        console.log(this.selectedUser);
    }
    
}