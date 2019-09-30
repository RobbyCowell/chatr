import React from 'react';

import ConversationList from './ConversationList';
import Conversation from './Conversation';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            user: {
                name: 'robby',
                conversations: null
            }
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/chats/' + this.state.user.name)
        .then(res => res.json())
        .then((result) => {
            this.setState(prevState => ({
                isLoaded: true,
                user: {
                    ...prevState.user,
                    conversations: result
                }
            }));
        },
        (error) => {
            console.dir(error);
            this.setState({
                isLoaded: true,
                error: error
            });
        });
    }
    
    render() {
        if (this.state.error) {
            return (
                <div>{this.state.error.message}</div>
            )
        } else if (!this.state.isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <div className="appContainer">
                    <ConversationList conversations={this.state.user.conversations}/>
                    {/* TODO: render Conversation component here */}
                </div>
            );
        }
    }
}

export default App;
