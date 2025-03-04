import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MessagesService {
    private messages = signal<string[]>([]);
    allMessages = this.messages.asReadonly();

    addMessage(messages: string) {
        this.messages.update((prevMessages) => [...prevMessages, messages]);
    }
}