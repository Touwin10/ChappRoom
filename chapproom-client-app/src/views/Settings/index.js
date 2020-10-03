
import React from 'react'
import './Settings.scss';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import HelpIcon from '@material-ui/icons/Help';
import MailIcon from '@material-ui/icons/Mail';
import {
    Button,
    List,
    ListSubheader,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Switch,
    Box,
    Divider,
    ListItemIcon,
    ButtonGroup
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Settings() {
    const classes = useStyles();
    return (
        <div className="Settings">
            <Button component={Link} to="/room">
                <ArrowBack />
            </Button>

            <div className="content">
                <div className="wrapper">

                    <Box boxShadow={1}>

                        <List subheader={<ListSubheader>Email Settings</ListSubheader>} className={classes.root}>
                            <ListItem>
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>

                                <ListItemText>
                                    Your email
                                </ListItemText>

                                <ListItemSecondaryAction>
                                    <Button size="small" variant="outlined">
                                        Save
                                   </Button>
                                </ListItemSecondaryAction>

                            </ListItem>
                        </List>
                        <Divider />

                        <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
                            <ListItem>
                                <ListItemIcon>
                                    <NotificationsIcon />
                                </ListItemIcon>

                                <ListItemText id="switch-list-label-notification"
                                    primary="Notification on your content"
                                    secondary="We will email you when there is new messages available in your inbox." />
                                <ListItemSecondaryAction>
                                    <Switch
                                        edge="end"
                                        color="primary"
                                        inputProps={{ 'aria-labelledby': 'switch-list-label-notification' }}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <BrightnessMediumIcon />
                                </ListItemIcon>
                                <ListItemText id="switch-list-label-theme"
                                    primary="Theme"
                                    secondary="Switch from ligth or Dark theme" />
                                <ListItemSecondaryAction>
                                    <ButtonGroup size="small" aria-label="outlined primary button group">
                                        <Button>Dark</Button>
                                        <Button>Light</Button>
                                    </ButtonGroup>
                                </ListItemSecondaryAction>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <HelpIcon />
                                </ListItemIcon>
                                <ListItemText id="switch-list-label-help"
                                    primary="Help"
                                    secondary="Search for help" />
                                <ListItemSecondaryAction>
                                    <Button size="small" variant="outlined">
                                        Find
                                   </Button>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </List>

                    </Box>


                </div>
            </div>





        </div>
    )
}
