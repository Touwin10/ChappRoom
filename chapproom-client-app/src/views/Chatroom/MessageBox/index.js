import React from 'react';
import FooterBar from './FooterBar';
import './MessageBox.scss';
import SockJsClient from 'react-stomp';
import { BASE_WS_API_URL, MessageType } from './../../../constants';
import { Box } from '@material-ui/core';
import { getConnectedUser, getConnectedUsername } from './../../../helpers';
import { chatActions } from '../../../actions';
import { connect } from 'react-redux';
import { ChatHelper } from '../../../helpers/chat.helper';

class MessageBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clientRef: null,
            update: false,
            messagesEndRef: React.createRef()
        };
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        if (this.state.messagesEndRef) {
            this.state.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    onConnect = () => {
        console.log("connected")
    }

    onDisconnect = () => {
        console.log("Disconnected")
    }

    onMessage = (msg) => {
        console.log(msg);
        const { selectedConversation } = this.props;
        if (selectedConversation) {
            selectedConversation.lastMessage = msg;
            selectedConversation.messages.push(msg);
            this.setState({ update: true });
        }
    }

    ref = (client) => {
        this.setState({ clientRef: client });
    }

    getReceiver = (conversation) => {
        if (!conversation) {
            return;
        }
        const user = getConnectedUser();
        if (conversation.from.username === user.username) {
            return conversation.to;
        }
        return conversation.from;

    }

    onSend = (msg, type = MessageType.TEXT) => {
        const { selectedConversation } = this.props;
        const receiver = this.getReceiver(selectedConversation);

        if (selectedConversation.isNew) {
            this.props.dispatch(chatActions.registerConversation(selectedConversation))
                .then(data => {
                    const conv = this.sendToSocket({ receiver, msg, type, selectedConversation: data });
                    this.props.onSelectConversation(conv);
                });
        } else {
            this.sendToSocket({ receiver, msg, type, selectedConversation });
        }
    }

    sendToSocket = ({ receiver, msg, type, selectedConversation }) => {
        const newMsg = ChatHelper.createNewMessage({
            to: receiver,
            content: msg,
            conversationId: selectedConversation.id,
            type
        });

        if (type === MessageType.IMAGE) {
            newMsg.image = msg;
        }

        const username = receiver.username;
        this.state.clientRef.sendMessage(`/app/sendMessageTo/${username}`, JSON.stringify(newMsg));
        selectedConversation.messages.push(newMsg);
        this.setState({ update: true });

        return selectedConversation;
    }

    onSendText = (msg) => {
        this.onSend(msg, MessageType.TEXT);
    }

    onSendPicture = (data) => {
        this.onSend(data, MessageType.IMAGE);
    }

    render() {
        let messages = [];
        let connectedUsername = getConnectedUsername();
        const { selectedConversation } = this.props;
        if (!selectedConversation.isNew) {
            if (selectedConversation && selectedConversation.messages) {
                messages = [...selectedConversation.messages];
            }
        }

        return (
            <div className="MessageBox">

                <div className="box">
                    <Box className="wrapper-box">
                        {
                            (messages || []).map((item, index) => {
                                return (
                                    <div className="row" key={index}>
                                        <Box
                                            className={`item ${(connectedUsername === item?.sender.username) ? 'right' : 'left'}`}
                                            boxShadow={2}>

                                            {item.messageType === MessageType.TEXT &&
                                                <div>
                                                    <div className="message">{item?.content}</div>
                                                </div>
                                            }

                                            {item.messageType === MessageType.IMAGE &&
                                                <div className="img-wrapper">
                                                    <img src={`data:image/*;base64,${item?.image}`} alt="" />
                                                </div>
                                            }

                                            <small className="time">
                                                {`${new Date(item.time).toLocaleTimeString('en-US',
                                                    { hour: 'numeric', minute: 'numeric', hour12: true })}`}
                                            </small>
                                        </Box>

                                    </div>
                                );
                            })
                        }
                        <div ref={this.state.messagesEndRef} />
                    </Box>
                </div>

                <div className="footer">
                    <FooterBar onSendMessage={this.onSendText} onSendPicture={this.onSendPicture} />
                </div>

                <SockJsClient
                    url={BASE_WS_API_URL}
                    topics={[`/user/${connectedUsername}/reply`]}
                    onConnect={this.onConnect}
                    onDisconnect={this.onDisconnect}
                    onMessage={this.onMessage}
                    ref={this.ref}
                />


            </div>
        )
    }
}

function mapStateToProps(state) {
    const { isFetching, didInvalidate, error, data } = state.userReducer;
    return {
        isFetching,
        didInvalidate,
        error,
        data
    };
}
export default connect(mapStateToProps)(MessageBox)
