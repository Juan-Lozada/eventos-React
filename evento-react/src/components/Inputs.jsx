import React from 'react';
import {Container, FloatingLabel, Form, Image} from 'react-bootstrap';


const InputsComponent = (props) => {
    
    const inputChange = (e) => {
        props.setValidPassword(e.target.value === props.password)
    }
    
    return (
      <Container className='d-flex justify-content-center flex-column mb-4 p-5'>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter your Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" >
        <Form.Control type="password" placeholder="Password" onChange={inputChange} />
      </FloatingLabel>
    </Container>    
    )
}

export default InputsComponent;