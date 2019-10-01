import React from 'react';

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
                style={{border: '1px solid grey'}}
                onClick={()=>this.props.onClick(this.props.conversation.id)}
            >
                <h4>{this.state.participants}</h4>
                <p>{lastMessage.contents}</p>
            </div>
        )
    }
}