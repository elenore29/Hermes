import React, { Component } from 'react';
import '../signup/signup.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HeaderLogin from '../../Components/header/HeaderLogin';

class Login extends Component {
    constructor(props){
        super(props)

    }
    submit(event){
        event.preventDefault();  

    }

    render() {
        return (
            <div>
                <HeaderLogin props={this.props}></HeaderLogin>
                <div className="signup font-weight-bold">

                    <Form onSubmit={()=>this.props.history.push('./list')}>
                
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className="input-signup" type="email" placeholder="ejemplo@correo.com" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control className="input-signup" type="password" placeholder="8-10 caracteres" />
                        </Form.Group>
                            <Button className="btn-signup" type="submit">Iniciar Sesión</Button>
                        </Form>
                </div>
            </div>
        );
    }
}
export default Login;