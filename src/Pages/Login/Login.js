import React,{useEffect, useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { GET_USER } from '../../Actions/action';
import FormContainer from "../../Components/FormContainer/FormContainer";

const Login = ({history}) => {
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const dispatch  = useDispatch();
    
    useEffect(() => {
        const luser=localStorage.getItem('user')
        dispatch({type:GET_USER,user:luser});
        luser && history.push(`/Home`);
    }, [history,dispatch])
    const submitHandler=(e)=>{
        e.preventDefault()
        const form = e.currentTarget;
    if (form.checkValidity() === false) {
    
      e.stopPropagation();
    }

    setValidated(true);
       console.log("submit");
       if((user === '' || !user || user === undefined) && (password === ''|| !password || password === undefined)){
        alert('Please Enter username and password')
       }
       else if(user === '' || !user || user === undefined){
            alert('Please Enter username')

       }else if(password === ''|| !password || password === undefined){
            alert('please Enter Password')
       }
       else if(password==='user@123' )
       {
           localStorage.setItem('user',user)
           dispatch({type:GET_USER,user:user});
           history.push(`/Home`);
       }
       else{
        console.log('Alert');
        alert("Password is not correct");
       }

    }
    return (
        
            <FormContainer>
                <h1>Sign In</h1>
                {/* {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader></Loader>} */}
                <Form noValidate validated={validated} onSubmit={submitHandler}>
                    <Form.Group controlId='user'>
                    <Form.Label>
                    username    
                    </Form.Label> 
                    <Form.Control required type='text' placeholder='Enter user' value={user} onChange={(e)=>setUser(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Control.Feedback type="invalid">
                    Please choose a username.
                    </Form.Control.Feedback>
                    <Form.Group controlId='password'>
                    <Form.Label>
                    Password    
                    </Form.Label> 
                    <Form.Control required type='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                    <Button type='submit' variant='primary'>
                    Sign In    
                    </Button>   
                </Form> 
            </FormContainer>
    )
}

export default withRouter(Login)