
import React from 'react';

import {
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    TextField,
    DialogActions,
    Button
} from '@material-ui/core';
import { userActions } from '../actions';
import { connect } from 'react-redux';


class ProfileFormDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: '',
            about: '',
            submitted: false
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
    }

    handleOpen() {
    }

    handleClose() {
        this.props.onClose();
    }

    updateProfile() {
        this.setState({ submitted: true });
        const { status, about } = this.state;
        this.props.dispatch(userActions.updateProfile({ status, about }));
    }

    render() {
        const { status, about, open } = this.props;
        return <Dialog
            fullWidth
            maxWidth="sm"
            onClose={this.handleClose}
            aria-labelledby="profile-form-dialog"
            open={open}>
            <DialogTitle id="profile-form-dialog">Update Profile</DialogTitle>
            <DialogContent>
                <form className="form" style={{ width: '100%' }}>
                    <FormControl style={{ width: '100%' }}>
                        <TextField
                            className="status"
                            id="status"
                            name="status"
                            label="Status"
                            value={status}
                            onChange={this.handleChange}
                            placeholder="Type your status"
                            type="text"
                        />
                        <TextField
                            className="about"
                            id="about"
                            name="about"
                            label="About"
                            value={about}
                            onChange={this.handleChange}
                            placeholder="What's in your mind?"
                            multiline
                            rows={4}
                            type="text"
                        />
                    </FormControl>
                </form>

            </DialogContent>

            <DialogActions>
                <Button onClick={this.handleClose}>
                    Cancel
                </Button>
                <Button onClick={this.updateProfile}>
                    Update
                </Button>
            </DialogActions>

        </Dialog>
    }

}

function mapStateToProps(state) {
    const { isFetching, didInvalidate, error } = state.userReducer;
    return {
        isFetching,
        didInvalidate,
        error
    };
}

export default connect(mapStateToProps)(ProfileFormDialog); 