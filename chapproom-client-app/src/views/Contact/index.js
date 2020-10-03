import React from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Link,
    Typography
} from '@material-ui/core';
import {
    ArrowBack, Chat
} from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import './Contact.scss';
// import { Pagination } from '@material-ui/lab';
import { userActions } from './../../actions';
import { getConnectedUsername, history, LocationHelper } from '../../helpers';
import { ChatHelper } from '../../helpers/chat.helper';


class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAllUsers());
        LocationHelper.removeUserInbox();
    }

    selectUser(user) {
        if (user) {
            const newConv = ChatHelper.createNewChat(user);
            newConv.isNew = true;
            LocationHelper.selectedUserInbox = newConv;
            history.push("/room");
        }
    }

    render() {
        const { data } = this.props;
        const username = getConnectedUsername();
        return (
            <div className="Contact">
                <Button className="back-btn" component={Link} href="/room">
                    <ArrowBack />
                </Button>


                <div className="content">
                    <div className="wrapper">

                        {
                            (data || []).map((item, index) => {
                                return (
                                    <Card
                                        key={index}
                                        className="card"
                                        raised
                                        hidden={item?.username === username}>
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="recipe" >
                                                    {
                                                        item?.username?.charAt(0).toUpperCase() ||
                                                        'U'
                                                    }
                                                </Avatar>
                                            }
                                            title={item?.username?.toUpperCase() || "User name"}
                                            subheader="I'm available">
                                        </CardHeader>

                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="h6">
                                                About
                                            </Typography>
                                            <Typography className="about" variant="body2" color="textSecondary" component="p">
                                                {
                                                    item?.profile?.about ||
                                                    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`
                                                }
                                            </Typography>
                                        </CardContent>

                                        <CardActions>
                                            <IconButton onClick={() => this.selectUser(item)}>
                                                <Chat />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                );
                            })
                        }

                    </div>


                </div>
                <div className="pagination">
                    {/* <Pagination count={2} shape="rounded" /> */}

                </div>

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
export default connect(mapStateToProps)(Contact)
