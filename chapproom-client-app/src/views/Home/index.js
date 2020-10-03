import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.scss";

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home">

                <div className="center">
                    <img className="img" src={`${process.env.PUBLIC_URL}/static/home-img.png`} alt="" />
                    <div style={{ textAlign: 'center' }}>
                        <Button component={Link} to="/login" variant="outlined" size="small">
                            Start Conversation
                        </Button>
                    </div>
                </div>

            </div>
        )
    }
}
