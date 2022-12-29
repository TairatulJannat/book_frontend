import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
class Login extends Component {
    state = {
        email: "",
        password: null,
        emailError: "",
        passError: ""

    }
    clickevent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate() {
        if (!this.state.email > 0 && !this.state.password > 0) {
            this.setState({ emailError: "Email and Password Required" })

        } else if (!this.state.email > 0) {
            this.setState({ emailError: "Email Required" })

        } else if (!this.state.password > 0) {
            this.setState({ passError: "Password Required" })

        } else {
            return true;
        }

    }

    submitForm = (event) => {
        event.preventDefault();
        // if(this.validate()){
        //     alert("Form Submit Done");
        // }
        axios({
            method: "post",
            url: "http://localhost:8000/api/login",
            data: {
                'email': this.state.email,
                'password': this.state.password,
            },
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                {/* {items} */}

                <form onSubmit={this.submitForm}>
                    <label>Email</label>
                    <input type="email" name="email" onChange={this.clickevent} /><br />
                    <strong style={{ color: 'red' }}>{this.state.emailError}</strong>
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.clickevent} /><br />
                    <strong style={{ color: 'red' }}>{this.state.passError}</strong><br />

                    <button type='submit'>submit</button>
                    <a href=''>Login here</a>
                </form>


            </div>
        );
    }
}
export default Login
