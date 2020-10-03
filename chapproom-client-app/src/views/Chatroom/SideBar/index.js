import React from 'react';
import { connect } from 'react-redux';
import SideHeader from './SideHeader';
import "./SideBar.scss";
import List from '@material-ui/core/List';
import { getConnectedUsername, LocationHelper } from './../../../helpers';
import SideItem from './SideItem';
import { chatActions } from '../../../actions';


class SideBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedConversation: null,
            conversations: [],
        };
    }

    componentDidMount() {
        const username = getConnectedUsername();
        this.props.dispatch(chatActions.getConversation(username)).then(() => {
            this.filterData();
        });
    }

    get selectedInbox() {
        return LocationHelper.selectedUserInbox;
    }

    filterData = () => {

        const { data } = this.props;
        let conversationList = [];

        if (data && data.length > 0) {
            conversationList = data;
        }

        let selectedConversation = this.selectedInbox;
        if (selectedConversation) {
            const isExists = conversationList.filter(c => c.to.username === selectedConversation.to.username);
            if (isExists.length > 0) {
                selectedConversation = isExists[0];
                selectedConversation.isNew = false;
                this.updateSelection(selectedConversation);
            } else {
                this.updateSelection(selectedConversation);
            }
        }

        this.setState({ selectedConversation, conversationList });
        this.props.onSelectConversation(selectedConversation);

    }

    onSelectInbox = (inbox) => {
        this.updateSelection(inbox);
        this.setState({ selectedConversation: inbox });
        this.props.onSelectConversation(inbox);
    }

    updateSelection = (inbox) => {
        LocationHelper.selectedUserInbox = inbox;
    }

    render() {
        const { conversationList, selectedConversation } = this.state;

        return (

            <div className="SideBar">
                <div className="header">
                    <SideHeader />
                </div>

                <div className="content">
                    <List className="list">
                        {
                            selectedConversation && selectedConversation.isNew === true &&
                            <SideItem
                                item={selectedConversation}
                                selected={
                                    (this.selectedInbox) ?
                                        selectedConversation?.to?.username === this.selectedInbox?.to?.username :
                                        false
                                } />
                        }

                        {
                            (conversationList || []).map((item, index) => {
                                return (
                                    <SideItem key={index}
                                        index={index}
                                        item={item}
                                        onSelect={this.onSelectInbox}
                                        selected={
                                            (this.selectedInbox) ?
                                                item?.to?.username === this.selectedInbox?.to?.username :
                                                false
                                        } />
                                );
                            })
                        }

                    </List>

                </div>

            </div>

        )
    }
}


function mapStateToProps(state) {
    const { isFetching, didInvalidate, error, data } = state.chatReducer;
    return {
        isFetching,
        didInvalidate,
        error,
        data
    };
}
export default connect(mapStateToProps)(SideBar)
