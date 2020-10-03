import React from 'react';
import SideBar from './SideBar';
import MessageBox from './MessageBox';
import './Chatroom.scss';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';


class Chatroom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedConversation: null,
            update: false
        };
        this.onSelectConversation = this.onSelectConversation.bind(this);
    }

    onSelectConversation(conv) {
        this.setState({ selectedConversation: conv });
    }

    render() {
        const { selectedConversation } = this.state;
        return (
            <div className="Chatroom">

                <div className="container">
                    <div className="sidebar">
                        <SideBar
                            onSelectConversation={this.onSelectConversation} />
                    </div>
                    <Divider orientation="vertical" />
                    <div className="wrapper">
                        {(selectedConversation) &&
                            <MessageBox selectedConversation={selectedConversation}
                                onSelectConversation={this.onSelectConversation} />}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { isFetching, didInvalidate, data, error } = state.userReducer;
    return {
        isFetching,
        didInvalidate,
        data,
        error
    };
}

export default connect(mapStateToProps)(Chatroom);