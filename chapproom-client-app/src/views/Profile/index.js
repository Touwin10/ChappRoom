
import React from 'react';
import './Profile.scss';
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    IconButton,
    Menu,
    MenuItem
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ProfileFormDialog from '../../components/profile-form.dialog';
import { connect } from 'react-redux';
import { userActions } from './../../actions/user.action';
import { getConnectedUsername } from '../../helpers';
import { Link } from 'react-router-dom';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            open: false,
            username: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDialogClickOpen = this.handleDialogClickOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(userActions.getProfile());
        const username = getConnectedUsername();
        if (username) {
            this.setState({ username: username })
        }
    }

    handleClick(event) {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClose() {
        this.setState({ anchorEl: null });
    }

    handleDialogClickOpen() {
        this.setState({ open: true });

    }

    handleDialogClose() {
        this.setState({ open: false });
    }

    render() {
        const { data } = this.props;
        const { username } = this.state;
        return (

            <div className="Profile">

                <Button className="back-btn" component={Link} to="/room">
                    <ArrowBack />
                </Button>

                <div className="content">
                    <div className="wrapper">

                        <Card raised className="card">
                            <CardHeader
                                title={username || `User name`}
                                subheader={(data?.status) || `I'm available`}
                                action={
                                    <div>
                                        <IconButton aria-label="settings" onClick={this.handleClick}>
                                            <MoreVertIcon />
                                        </IconButton>

                                        <Menu id="menu"
                                            anchorEl={this.state.anchorEl}
                                            keepMounted
                                            open={Boolean(this.state.anchorEl)}
                                            onClose={this.handleClose}>

                                            <MenuItem onClick={this.handleDialogClickOpen}> Update  </MenuItem>
                                        </Menu>
                                        <ProfileFormDialog open={this.state.open} onClose={this.handleDialogClose} />

                                    </div>


                                }
                                avatar={
                                    <Avatar>
                                        U
                        </Avatar>
                                } />
                            <CardMedia
                                style={{ height: 0, paddingTop: '40%' }}
                                image="https://houstoncertifiedmidwife.com/wp-content/uploads/2016/05/orange-profile-background-1.png"
                                src="image"
                                title="User" />

                            <CardContent>
                                <Typography variant="h6" >
                                    About
                        </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {data?.about || `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore`}
                                </Typography>
                            </CardContent>

                        </Card>

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

export default connect(mapStateToProps)(Profile)
