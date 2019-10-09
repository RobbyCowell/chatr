import React from 'react';
import './conversation-bar.css';

export default class ConversationBar extends React.Component {
    handleSend = (e) => {
        this.props.onClick();
        document.querySelector('.conversation-bar__txt-box').value = '';
    }
    
    render() {
        return (
            <div className="conversation-bar">
                <input 
                    className="conversation-bar__txt-box"
                    type="text" 
                    onChange={this.props.onChange} />
                <button 
                    className="conversation-bar__send" 
                    onClick={this.handleSend}>
                    Send
                </button>
            </div>
        )
    }
}