import React from 'react';
import './conversation-listing.css';
import { filterParticipant } from './Utils';

export default class ConversationListing extends React.Component {
    render() {
        const messages = this.props.conversation.messages;
        const participantsToDisplay = 
            filterParticipant(
                this.props.conversation.participants, 
                this.props.user);
        const lastMessage = messages[messages.length - 1];
        const selected = (this.props.conversation.id === this.props.selected);
        return (
            <div
                className={"conversation-listing " + (selected ? 'conversation-listing--selected': '') }
                onClick={()=>this.props.onClick(this.props.conversation.id)}
            >
                <h4 className="conversation-listing__participants">{participantsToDisplay}</h4>
                <p className="conversation-listing__last-msg">{lastMessage.contents}</p>
            </div>
        )
    }
}