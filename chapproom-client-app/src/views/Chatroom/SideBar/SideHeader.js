import React from 'react';
import './SideHeader.scss';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

export default function SideHeader() {
    return (
        <div className="SideHeader">
            <Paper component="form" className="form">
                <IconButton aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder="Search People"
                />
            </Paper>
        </div>
    )
}
