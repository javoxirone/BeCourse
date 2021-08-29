import React, { Component } from 'react'
import MyNetwork from "./Components/Message/MyNetwork";
import './Styles/Chat.scss';

class Chat extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <MyNetwork />
                </div>
            </div>
        );
    }
}
export default Chat;