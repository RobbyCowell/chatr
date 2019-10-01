import React from 'react';
import ConversationListing from './ConversationListing';
import './conversation-list.css';

export default class ConversationList extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            conversations: this.props.conversations
        }
    }
    
    render() {
        return (
            <div className="conversation-list col-4">
                <h3 className="conversation-list__title">Chats</h3>
                {this.props.conversations.map(conversation => (
                    <ConversationListing 
                        key={conversation.id}
                        conversation={conversation}
                        user={this.state.user}
                        onClick={this.props.onClick} />
                ))}
            </div>
        )
    }
}