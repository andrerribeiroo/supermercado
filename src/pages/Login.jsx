import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

const Login = () => (

  <div style={{background: "black" , height:"100vh" , display: "flex" , alignItems: "center" , justifyContent: "center" }}>

    <Container style={{background: "white" , padding: "20px" , borderRadius: "10px" , boxShadow: "0 0 10px rgba(0,0 0.2)"}}>
    
      <h1 style={{fontSize: "100px" , color:"black" , textShadow: "black 0px 0px 55px" }}>Fazer Login</h1>

      <span style={{fontSize: "100px" , color:"black" , margin: "20px"}} className="material-symbols-outlined">account_circle</span>

      {/* Caixinha de Email */}

      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
        {/* Caixinha de Email */}

        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Senha">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>


      {/* button enviar */}

      <Button style={{ marginTop: "20px" }} variant="success">Entrar na conta</Button>

    </Container>
  </div>
);

export default Login;
