import React from 'react';

export default class ConversationList extends React.Component {
    render() {
        /*
        * remove current user from props so it doesn't show you're in a conversation with yourself
        * if particpants.length > 2
        *  save number of particpants so it says, 'conversation with {name} and {no} others'
        * else just show other particpant
        */

        return (
            <div className="conversation-list">
                {this.props.conversations.map(conversation => (
                    <div key={conversation.id}>
                        <p>Conversation with {conversation.participants[0]}</p>
                    </div>
                ))}
            </div>
        )
    }
}