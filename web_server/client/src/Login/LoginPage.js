import LoginForm from './LoginForm';
import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        }
    }

    processForm(event) {
        // the default behavior of submit is a http POST request
        event.preventDefault();

        const email = this.state.user.email;
        const password = this.state.user.password;

        console.log('email:', email);
        console.log('password', password);

        //TODO: past login data

    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({user});

    }

    render() {
        // what loginPage only does is to render loginForm
        return (
            <LoginForm
                onSubmit={(e) => this.processForm(e)}
                onChange={(e) => this.changeUser(e)}
                errors={this.state.errors}
            />
        )
    }
}

export default LoginPage;