import { html } from 'htm/preact';
import View from '../View.js';
import ChatList from './ChatList.js';
import PrivateChat from './PrivateChat';
import HashtagChat from './HashtagChat';

class Chat extends View {
  constructor() {
    super();
    this.id = "chat-view";
  }

  renderView() {
    let chat;
    if (this.props.hashtag) {
      chat = html`<${HashtagChat} hashtag=${this.props.hashtag} key=${this.props.hashtag} />`;
    } else {
      chat = html`<${PrivateChat} id=${this.props.id} key=${this.props.id} />`;
    }
    return html`
      <${ChatList} class=${this.props.id || this.props.hashtag ? 'hidden-xs' : ''}/>
      ${chat}
    `;
  }
}

export default Chat;
