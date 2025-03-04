import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessagesService {
    mesages$ = new BehaviorSubject<string[]>([]);
    private messages: string[] = [];

    get allMessages() {
        return [...this.messages];
    }

    addMessage(message: string) {
        this.messages = [...this.messages, message];
        this.mesages$.next(this.messages)
    }
}