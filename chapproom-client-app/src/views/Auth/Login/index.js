import React from 'react';
import './Login.scss';
import {
    Card,
    CardContent,
    Divider,
    Typography,
    TextField,
    InputAdornment,
    Button,
    FormControl,
    FormHelperText, LinearProgress
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';
import { authActions, LOGIN_FAILURE } from './../../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(authActions.logout());
        this.state = {
            username: '',
            password: '',
            submitted: false
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
        const { username, password } = this.state;
        if (username && password) {
            this.props.dispatch(authActions.login(username, password));
        }
    }

    render() {
        const { isFetching, didInvalidate, error } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="Login">
                <div className="content">
                    <div className="wrapper">
                        <Card className="card" raised={true}>
                            <CardContent>
                                <Typography variant="h5" align="center" style={{ padding: 10 }}>Login</Typography>
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

                                    <Button type="submit"
                                        className="btn-submit"
                                        variant="contained"
                                        color="primary"
                                        display="block">
                                        Login
                                    </Button>
                                    {isFetching && <LinearProgress />}

                                    {didInvalidate && error === LOGIN_FAILURE &&
                                        <Typography variant="body2" color="error" style={{ marginTop: 10 }}>
                                            Username or Password is incorrect
                                        </Typography>
                                    }

                                </form>
                                <Divider />

                                <Typography variant="caption" display="block" style={{ marginTop: 15 }}>
                                    Have not account yet?
                                </Typography>

                                <Button component={Link} className="btn-signup" size="small" to="/register">
                                    Register
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
export default connect(mapStateToProps)(Login); 