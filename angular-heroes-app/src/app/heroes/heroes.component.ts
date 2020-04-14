import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { Router } from '@angular/router';
import { GitUser, User } from '../user'
import { UserService } from '../services/user.service';
import {MatPaginator} from '@angular/material/paginator';


@Component({
    selector: 'app-heores',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']

})
export class HeroesComponent implements OnInit {

    selectedUser: User;
    isLoadingResults = true;
    resultsLength = 0;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    users: MatTableDataSource<GitUser> = new MatTableDataSource([]);

    displayedColumns: string[] = ['select', 'id', 'login'];

    constructor(private userService: UserService,
                private router: Router) { }

    ngOnInit() {
        this.users.paginator = this.paginator;
        this.getGituser();
        
    }

    getGituser(): void {
        this.userService.getUsersFromGithUb().subscribe(DATA => {
            this.users = new MatTableDataSource(DATA);
            this.isLoadingResults = false;
            this.resultsLength = DATA.length;
            console.log(this.users);
        });
    }

    masterToggle(event: Event) {
        

    }

    applyFilter(event: Event) {
        

    }

    getUserDetails(row: any) {
        this.router.navigate(['detail/'+row.login]);
    }

    
    // onUserSelect(user: User): void {
    //     this.selectedUser = user;
    //     this.messagesService.add('userService: selected a Id=${user.id}');
    //     console.log(this.selectedUser);
    // }
}
