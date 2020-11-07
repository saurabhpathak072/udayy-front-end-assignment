import React, { useState,useEffect } from 'react';
import { Form,Row,Col, Container,FormControl, Nav, Navbar,Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Fram from '../../Components/Views/Frame/Fram';

const Home = ({history}) => {
    const [texturl1, setTexturl1] = useState('');
    const [texturl2, setTexturl2] = useState('');
    const [searchurl1, setSearchurl1] = useState('');
    const [searchurl2, setSearchurl2] = useState('');
    const user = useSelector(state => state.user);
    useEffect(() => {
        if(!user || user===undefined||user===''){
            history.push('/')
        }
    }, [user,history])
    const changeUrl1 = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
        setTexturl1(e.target.value);
    }
    const changeUrl2=(e)=>{
        e.preventDefault();
        setTexturl2(e.target.value)
    }
    const submitHandler1=(e)=>{
        e.preventDefault();
        setSearchurl1(texturl1);
    }
    const submitHandler2=(e)=>{
        e.preventDefault();
        setSearchurl2(texturl2);
    }
    const signoutHandler=()=>{
        localStorage.removeItem('user');
        history.replace('/');
    }
    const signinHandler=()=>{
        history.push('/');
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Welcome <strong>{user}!</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Form inline onSubmit={submitHandler1}>
                <FormControl
                 value={texturl1}
                 onChange={changeUrl1} 
                 type="text" 
                 placeholder="Enter url with https://" 
                 className="mr-sm-2 " />
                <Button
                 style={{display:'none'}} 
                 type='submit' 
                 variant="outline-info"
                >change
                </Button>
              </Form>
            </Nav>
            <Nav>
                <Form
                 inline 
                 onSubmit={submitHandler2}
                >
                    <FormControl
                    type="text" 
                    placeholder="Enter url with https://"
                    value={texturl2}
                    onChange={changeUrl2} 
                    className="mr-sm-2" />
                    <Button
                     type="submit" 
                     style={{display:'none'}} 
                     variant="outline-info"
                    >change
                    </Button>
                </Form>
            </Nav>
            <Nav className="ml-auto">
                  {user?
                  <Button
                   type="button" 
                   variant="outline-danger" 
                   onClick={signoutHandler}
                   >Sign Out
                   </Button>:
                   <Button
                    type="button" 
                    variant="outline-success" 
                    onClick={signinHandler}
                    >Sign In
                    </Button>
                    }
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            {user?(
                <Container fluid>
                <Row>
                    <Col sm={12} lg={6}>
                        <h3>View 1</h3>
                        <Fram url={searchurl1}/>
                    </Col>
                    <Col sm={12} lg={6}>
                        <h3 >View 2</h3>
                        <Fram url={searchurl2}/>
                    </Col>
                </Row>
                </Container>
            ):`Please Sign in for access`}
            
            
</>
        
    )
}

export default withRouter(Home)
