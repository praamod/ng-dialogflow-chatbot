import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-msg',
  templateUrl: './chat-msg.component.html',
  styleUrls: ['./chat-msg.component.scss'],
})
export class ChatMsgComponent implements OnInit {
  @Input() msg: any;
  public isVisible = false;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 0);
  }
}
