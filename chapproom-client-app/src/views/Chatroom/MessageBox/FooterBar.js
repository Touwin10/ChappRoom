import React from 'react';
import './FooterBar.scss';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { connect } from 'react-redux';
import { Utils } from '../../../utils';


class FooterBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    handleUpload = (e) => {
        this.refs.fileUploader.click();
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.sendMessage(e.target.value);
            e.target.value = "";
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.sendMessage(e.target.value);
        e.target.value = "";
    }

    sendMessage = (value) => {
        if (!value) {
            return;
        }
        this.props.onSendMessage(value)
    }

    onFileChange = (e) => {
        const file = e.target.files[0];
        Utils.converToBase64(file).then(base64 => {
            this.props.onSendPicture(base64, false);
        });
    };

    render() {
        return (
            <Box component="div" className="FooterBar">
                <Divider />
                <Grid container spacing={0} alignItems="center" justify="center" >
                    <Grid item xs={1}>
                        <input
                            accept="image/*"
                            style={{ display: "none" }}
                            ref="fileUploader"
                            type="file"
                            onChange={this.onFileChange} />
                        <Button onClick={this.handleUpload}>
                            <AttachFileIcon className="icon" />
                        </Button>
                    </Grid>
                    <Grid item xs={10}>
                        <form>
                            <Input
                                className="message-input"
                                placeholder="Send your message"
                                onKeyPress={this.handleKeyPress} />
                        </form>
                    </Grid>
                    <Grid item xs={1}>
                        <Button onClick={this.handleClick}>
                            <SendIcon className="icon-send" />
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}


export default connect()(FooterBar)
