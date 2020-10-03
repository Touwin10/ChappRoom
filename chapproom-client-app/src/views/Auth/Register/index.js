import React from 'react';
import {
    Card,
    CardContent,
    Divider,
    Typography,
    TextField,
    InputAdornment,
    Button,
    FormControl,
    LinearProgress,
    FormHelperText
} from '@material-ui/core';
import { AccountCircle, Mail } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';
import { authActions, REGISTER_FAILURE } from './../../../actions';
import { connect } from 'react-redux';
import './Register.scss';
import { Utils } from '../../../utils';
import { Link } from 'react-router-dom';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            confirmPassword: '',
            submitted: false,
            incorrectPassword: false,
            invalidEmail: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password, email, confirmPassword } = this.state;

        if (!Utils.validateEmail(email)) {
            this.setState({ invalidEmail: true });
            return;
        }

        if (!password || !confirmPassword || (password !== confirmPassword)) {
            this.setState({ incorrectPassword: true });
            return;
        }

        if (username && password && email) {
            this.props.dispatch(authActions.register(username, password, email));
        }
    }

    render() {

        const { isFetching, didInvalidate, error } = this.props;
        const {
            username,
            password,
            confirmPassword,
            submitted,
            email,
            incorrectPassword,
            invalidEmail
        } = this.state;
        return (

            <div className="Register">

                <div className="content">
                    <div className="wrapper">


                        <Card className="card" raised={true}>
                            <CardContent>
                                <Typography variant="h5" align="center" style={{ padding: 10 }}>Register</Typography>
                                <Divider />

                                <form className="form" onSubmit={this.handleSubmit}>
                                    <FormControl className="form-field" error={submitted && !username}>
                                        <TextField
                                            className="username"
                                            id="username"
                                            label="Username"
                                            type="text"
                                            name="username"
                                            value={username}
                                            onChange={this.handleChange}
                                            placeholder="Type your username"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AccountCircle />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        {submitted && !username &&
                                            <FormHelperText id="username-error">Username is required</FormHelperText>
                                        }
                                    </FormControl>
                                    <FormControl className="form-field" error={submitted && (!email || invalidEmail)}>
                                        <TextField
                                            className="email"
                                            id="email"
                                            label="Email"
                                            type="text"
                                            name="email"
                                            value={email}
                                            onChange={this.handleChange}
                                            placeholder="Type your Email"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Mail />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        {submitted && !email &&
                                            <FormHelperText id="email-error">Email is required</FormHelperText>
                                        }
                                        {invalidEmail &&
                                            <FormHelperText id="email-error">Email is invalid</FormHelperText>
                                        }

                                    </FormControl>
                                    <FormControl className="form-field" error={submitted && !password}>
                                        <TextField
                                            className="password"
                                            id="password"
                                            label="Password"
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={this.handleChange}
                                            placeholder="Type your password"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LockIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        {submitted && !password &&
                                            <FormHelperText id="password-error">Password is required</FormHelperText>
                                        }
                                    </FormControl>

                                    <FormControl className="form-field" error={submitted && !confirmPassword}>
                                        <TextField
                                            className="Confirm Password"
                                            id="confirmPassword"
                                            label="Confirm Password"
                                            type="password"
                                            name="confirmPassword"
                                            value={confirmPassword}
                                            onChange={this.handleChange}
                                            placeholder="Type your password"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LockIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        {submitted && !confirmPassword &&
                                            <FormHelperText id="confirmPassword-error">Confirm Password is required</FormHelperText>
                                        }
                                    </FormControl>

                                    <Button type="submit"
                                        className="btn-submit"
                                        variant="contained"
                                        color="primary"
                                        display="block" >
                                        Register
                                     </Button>
                                    {isFetching && <LinearProgress />}

                                    {didInvalidate && error === REGISTER_FAILURE &&
                                        <Typography variant="body2" color="error" style={{ marginTop: 10 }}>
                                            Failed to register
                                        </Typography>
                                    }

                                    {incorrectPassword &&
                                        <Typography variant="body2" color="error" style={{ marginTop: 10 }}>
                                            Incorrect Password
                                        </Typography>
                                    }

                                </form>

                                <Divider />

                                <Typography variant="caption" display="block" style={{ marginTop: 15 }}>
                                    Already have an account?
                                </Typography>

                                <Button component={Link} className="btn-signin" size="small" to="/login">
                                    Login
                                </Button>

                            </CardContent>
                        </Card>



                    </div>
                </div>

            </div>

        )
    }
}

function mapStateToProps(state) {
    const { isFetching, didInvalidate, error } = state.authentication;
    return {
        isFetching,
        didInvalidate,
        error
    };
}
export default connect(mapStateToProps)(Register);


