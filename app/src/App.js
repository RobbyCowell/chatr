import React from 'react';

import ConversationList from './components/ConversationList';
import Conversation from './components/Conversation';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            user: {
                name: 'Robby Cowell',
                conversations: null
            },
            selectedConversation: null
        };
    }

    componentDidMount() {
        this.getConversationData();
    }

    getConversationData = () => {
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

            if (!this.state.selectedConversation) {
                this.setState({selectedConversation: result[0]});
            } else {
                let updatedConvo = result.filter(convo => {
                    return convo.id === this.state.selectedConversation.id;
                });
                this.setState({selectedConversation: updatedConvo[0]});
            }
        },
        (error) => {
            console.dir(error);
            this.setState({
                isLoaded: true,
                error: error
            });
        })
    }

    switchConversation = (id) => {
        let selectedConversation = this.state.user.conversations.filter(convo => {
            return convo.id === id
        })

        this.setState({
            selectedConversation: selectedConversation[0]
        });
    }
    
    render() {
        if (this.state.error) {
            return (
                <div>{this.state.error.message}</div>
            )
        } else if (!this.state.isLoaded || !this.state.selectedConversation) {
            return <p>Loading...</p>
        } else {
            return (
                <div className="appContainer container">
                    <div className="row">
                        <ConversationList
                            selected={this.state.selectedConversation.id}
                            conversations={this.state.user.conversations}
                            user={this.state.user.name}
                            onClick={this.switchConversation}
                        />
                        <Conversation 
                            conversation={this.state.selectedConversation} 
                            user={this.state.user.name}
                            updateMessages={this.getConversationData}
                        />
                    </div>
                </div>
            );
        }
    }
}

export default App;
