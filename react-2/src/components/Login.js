import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {register, login, isLogged} from '../services/loginService'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : '',
            password : ''
        }
    }

    handleChangeUserName = event => {
        const userName = event.target.value
        this.setState({userName})
    }

    handleChangePassword = event => {
        const password = event.target.value
        this.setState({password})
    }

    registerUser = () => {        
        try {
            const user = register({
                username: this.state.userName,
                password: this.state.password
            }); 
            login(user)
        } catch (error) {
            alert(error);    
        }
    }

    onSubmit = () => {
        const {history} = this.props;
       if (isLogged()) {
            history.push('/')     
        }
    }

    loginUser = () => {
        try {
            login({
                username : this.state.userName,
                password : this.state.password
            })     
        } catch (error) {
            alert(error); 
        }
    }

    render = () => (
        <form className="form-signin" onSubmit = {this.onSubmit}>
            <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">Login / Register</h1>
            </div>
    
            <div className="form-label-group">
                <label htmlFor="inputEmail">Username</label>
                <input
                    name="username"
                    onChange={this.handleChangeUserName}
                    value={this.state.userName}
                    className="form-control"
                    placeholder="Username"
                    required
                />
            </div>
    
            <div className="form-label-group mt-2">
                <label htmlFor="inputPassword">Password</label>
                <input
                    name="password"
                    onChange={this.handleChangePassword}
                    value={this.state.password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                />
            </div>
    
            <div className="mt-5">
                <button className="login btn btn-lg btn-primary btn-block" onClick = {this.loginUser} type="submit">Login</button>
                <button className="register btn btn-lg btn-secondary btn-block" onClick = {this.registerUser} type="submit">Register</button>
            </div>
        </form>
    )
}

export default  withRouter(Login)