import React from 'react';
import './TopBar.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import MessageIcon from '@material-ui/icons/Message';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}));

export default function TopBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box boxShadow={1} component="div" className="TopBar">
            <Grid container
                className="container"
                spacing={0}
                justify="space-between"
                alignContent="center"
                alignItems="center"
                wrap="nowrap">

                <Grid item xs="auto">
                    <Avatar variant="circle" className={classes.small} alt="" src="/static/home-img.png" />
                </Grid>
                <Grid item xs={10}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className="title">
                        ChappRoom
                    </Typography>
                </Grid>

                <Grid item>
                    <Button component={Link} to="/room/contacts">
                        <MessageIcon />
                    </Button>
                </Grid>
                <Grid item>
                    <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon />
                    </Button>
                    <Menu id="menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>

                        <MenuItem component={Link} to="/room/profile"> Profile  </MenuItem>

                        <MenuItem component={Link} to="/room/settings">Settings</MenuItem>
                        <MenuItem component={Link} to="/login">Logout</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Box>
    )
}
