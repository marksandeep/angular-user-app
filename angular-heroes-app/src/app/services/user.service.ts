import { Injectable } from '@angular/core';
import { from, Observable, throwError, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Http, Response} from "@angular/http";
import { GitUserDetail, GitUser, User, USERS } from '../user';


@Injectable({
    providedIn: 'root',
})
export class UserService {
    data: any[];
    constructor(private http: Http) {

    }

    getUsers(): Observable<User[]> {
        return of(USERS);
    }
    getHero(id: number): Observable<User> {
        // TODO: send the message _after_ fetching the hero
        // this.messageService.add(`UserService: fetched user id=${id}`);
        return of(USERS.find(user => user.id === id));
    }

    getUsersFromGithUb(): Observable<GitUser[]> {
        return this.http.get('https://api.github.com/users?per_page=50').pipe(map(res => res.json() as GitUser[]));
    }

    getUserDetailFromGithub(login: string): Observable<GitUserDetail> {
        return this.http.get('https://api.github.com/users/'+login).pipe(map(res => res.json() as GitUserDetail));
    }
}