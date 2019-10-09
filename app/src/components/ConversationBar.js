import React from 'react';
import './conversation-bar.css';

export default class ConversationBar extends React.Component {
    render() {
        return (
            <div className="conversation-bar">
                <input 
                    className="conversation-bar__txt-box"
                    type="text" 
                    onChange={this.props.onChange} />
                <button 
                    className="conversation-bar__send" 
                    onClick={this.props.onClick}>
                    Send
                </button>
            </div>
        )
    }
}