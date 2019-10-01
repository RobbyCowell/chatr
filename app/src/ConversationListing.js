import React from 'react';
import './conversation-listing.css';

export default class ConversationListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            participants: null,
            messages: this.props.conversation.messages,
        }
    }

    componentDidMount() {
        this.setState({participants: this.filterParticipants()})
    }

    filterParticipants () {
        let filtered = this.props.conversation.participants;
        const index = filtered.indexOf(this.state.user);
        if (index !== -1) {
            filtered.splice(index, 1);
        }

        return filtered;
    }

    render() {
        let lastMessage =  this.state.messages[this.state.messages.length - 1]
        return (
            <div 
                className="conversation-listing"
                onClick={()=>this.props.onClick(this.props.conversation.id)}
            >
                <h4 className="conversation-listing__participants">{this.state.participants}</h4>
                <p className="conversation-listing__last-msg">{lastMessage.contents}</p>
            </div>
        )
    }
}