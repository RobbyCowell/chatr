import React from 'react';
import ConversationListing from './ConversationListing';
import './conversation-list.css';

export default class ConversationList extends React.Component {    
    render() {
        return (
            <div className="conversation-list col-4">
                <h3 className="conversation-list__title">Chats</h3>

                {this.props.conversations.map(conversation => (
                    <ConversationListing
                        selected={this.props.selected} 
                        key={conversation.id}
                        conversation={conversation}
                        user={this.props.user}
                        onClick={this.props.onClick}
                    />
                ))}
            </div>
        )
    }
}