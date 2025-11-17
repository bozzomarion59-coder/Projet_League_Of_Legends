import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


;


const NavBar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');


    return <>
        <Navbar expand="lg" className="bg-dark" variant="dark" fixed='top'>
            <Container>
                <Navbar.Brand className='cursor' onClick={() => { navigate('/') }}>
                    <img
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTre4-qIVpJb4gs2XVE8uxtoMBqSuoKiAN3-A&s"}
                        width="40"
                        height="40"
                        style={{ borderRadius: '10px' }}
                        className="d-inline-block align-top me-2"
                        alt="LOLLogo"

                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate('/') }}>Accueil</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/quizz') }}>Quizz</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/champions') }}>Champions et leur histoire</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/regions') }}>Régions</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/items') }}>Items</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>;
}

export default NavBar;