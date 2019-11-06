import React from "react";
import io from "socket.io-client";

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messages: []
        };

        this.socket = io('localhost:3001');

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                message: this.state.message
            });
            this.setState({ message: '' });
        }

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        };
    }
    render() {
        return (
            <div className="container">
                <div className="messages">
                    {this.state.messages.map(message => {
                        return (
                            <div>{message.message}</div>
                        )
                    })}
                </div>
                <div className="footer">
                    <input type="text" placeholder="Message" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} />
                    <br />
                    <button onClick={this.sendMessage} >Send</button>
                </div>
            </div>
        );
    }
}

export default Chat;