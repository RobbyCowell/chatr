import React from 'react';
import './conversation.css';

export default class Conversation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: null,
            user: this.props.user
        }
    }

    componentDidMount() {
        this.setState({participants: this.filterParticipants()})
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
        .then((data) => {
            //TODO: update current list
            console.log(data);
        })
    }

    filterParticipants = () => {
        let filtered = this.props.conversation.participants;
        const index = filtered.indexOf(this.state.user);
        if (index !== -1) {
            filtered.splice(index, 1);
        }

        return filtered;
    }
    
    render() {
        return (
            <div className="conversation col offset-md-1">
                <h3 className="conversation__title">{this.filterParticipants()}</h3>
                <div className="messageList">
                    {this.props.conversation.messages.map(message => (
                        <div 
                            className= {
                                "message " + 
                                (message.sentBy === this.props.user ? 'message--sent': 'message--received')
                            }
                            key={message.timeSent}>
                            <p>{message.contents}</p>
                        </div>
                    ))}
                </div>
                <div className="actionCentre">
                    <input type="text" onChange={this.handleMsgChange} />
                    <button onClick={this.sendMsg}>Send</button>
                </div>
            </div>
        );
    }
}