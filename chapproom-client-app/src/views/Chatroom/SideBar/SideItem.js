import React, { Component } from 'react';
import {
    Typography
} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { getConnectedUser } from '../../../helpers';


export default class SideItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSelect = (item) => {
        if (this.props.onSelect)
            this.props.onSelect(item)
    }

    get Username() {
        const { item } = this.props;
        if (!item) {
            return "";
        }
        const user = getConnectedUser();
        if (item.from.username === user.username) {
            return item.to.username;
        }
        return item.from.username;
    }

    render() {
        const { item, index, selected } = this.props;
        return (

            <ListItem
                key={index}
                className="item"
                selected={selected}
                onClick={() => this.onSelect(item)}>
                <ListItemAvatar>
                    <Avatar className="avatar">
                        {
                            item?.to?.username?.charAt(0) ||
                            'U'
                        }
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={
                    <React.Fragment>
                        <Grid container wrap="nowrap">
                            <Grid className="username" item xs={8}>{this.Username || "User name"}</Grid>
                            <Grid item xs={4}>
                                <Typography variant="caption">
                                    {item.lastMessage &&
                                        `${new Date(item.lastMessage.time).toLocaleTimeString('en-US',
                                            { hour: 'numeric', minute: 'numeric', hour12: true })}`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                } secondary={
                    <React.Fragment>
                        <Typography component="span" variant="body2" gutterBottom className="body">
                            {item?.lastMessage?.content || ""}
                        </Typography>
                    </React.Fragment>
                } />
            </ListItem>


        )
    }
}
