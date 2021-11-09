import React, { Component } from 'react';
import Friend from '../Friend/Friend';
import './FriendList.css';

/* TODO: [SR] 
   use prettier and eslint
   Add tests
   Chat object should be typed
   Divide into components
*/



class Message extends Component{
    render () {
        return ( 
          <div > { this.props.text } 
          </div>
        );
    }
  };

export default class FriendList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          friends: [
            { name: 'Nuno', id: 1, chat :[] },
            { name: 'Gabriel',id: 2, chat :[]  },
            { name: 'Benjamin', id: 3, chat :[] },
            { name: 'Takehiro', id: 4, chat :[]}
          ],
          chatInput: '',
          messages: [],
          currentFriend: 1,
        }

    }

    openChat = (friend) => {
        this.setState({
            currentFriend: friend.id
        });
    }

    send = () => {
        let chatInput = this.state.chatInput;
        if(chatInput.trim() !== '') {
            let currentFriendObject = this.state.friends.find(x => x.id === this.state.currentFriend);
            let messages = currentFriendObject.chat;
            messages.push(
                <Message key={ this.state.messages.length } text={ chatInput }/>
                );
                let friends = [...this.state.friends];
        let copyFriend = {...currentFriendObject};
        copyFriend.chat  = messages;
        currentFriendObject = copyFriend;
            this.setState({
                friends,
                chatInput: ''
        });
        }
    }

    updateInput = (e) => {
        const value = e.target.value;
        this.setState({
            chatInput: value
        })
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
           this.send();
        }
    }


    render = () => {
        let currentFriend = this.state.friends.find(x => x.id === this.state.currentFriend);
        return (
           <div className="chat-ui">
                <div className="friend-list">
                    <h3>My friends</h3>
                    <div>
                        {this.state.friends.map(friend => <Friend key={friend.name} friend={friend} chat={this.openChat} />)}
                    </div>
                </div>
                <div className="chat-container">
                   <div className="chat-window">
                        <div className="chat-window-head">
                           { currentFriend.name }
                        </div>
                        <div className="chat-window-messages">
                            { currentFriend.chat }   
                        </div>
                    </div> 
                    <div className="chat-input-group">
                        <input 
                            type="text"
                            placeholder="Type here.."
                            value={this.state.chatInput}
                            onChange={this.updateInput}
                            onKeyDown={this.handleKeyDown}
                        />
                        <button 
                            onClick={this.send}>
                            Send
                        </button>
                    </div>
                </div>
            </div>           
        );
    }
}
