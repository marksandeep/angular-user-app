import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';



@Component({
    selector: 'messages-details',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
    
    
    constructor(public messagesService: MessagesService ) {}
    ngOnInit() {

    }
    // addMessage(user: User): void {
    //     this
    // }
}