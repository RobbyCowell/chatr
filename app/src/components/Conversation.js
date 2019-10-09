import React from 'react';
import './conversation.css';
import ConversationBar from './ConversationBar';
import { filterParticipant } from './../Utils';

export default class Conversation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: null,
        }
    }
    
    handleMsgChange = (e) => {
        this.setState({
            msg: e.target.value
        });
    }

    sendMsg = () => {
        const body = {
            sender: this.props.user,
            msg: this.state.msg,
            id: this.props.conversation.id,
        };

        fetch('http://localhost:5000/send', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(() => {
            this.props.updateMessages();
        })
    }

    
    render() {
        const participantsToDisplay = 
            filterParticipant(
                this.props.conversation.participants, 
                this.props.user);

        return (
            <div className="conversation col offset-md-1">
                <h3 className="conversation__title">{participantsToDisplay}</h3>
                <div className="messageList">
                    {this.props.conversation.messages.map(message => (
                        <div 
                            className={
                                "message " + 
                                (message.sentBy === this.props.user ?
                                    'message--sent':
                                    'message--received')
                            }
                            key={message.timeSent}>
                            <p>{message.contents}</p>
                        </div>
                    ))}
                </div>
                <ConversationBar 
                    onChange={this.handleMsgChange}
                    onClick={this.sendMsg}
                />
            </div>
        );
    }
}