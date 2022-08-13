import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

const NavbarComponent = () => {
  return (
        <Navbar expand="lg" style={{backgroundColor: '#2C3333'}}>
          <Container>
            <Stack gap={2} className="col-md-5 mx-auto">
                <Navbar.Brand className="text-center text-light"><a class="text-reset fw-bold m-2" style={{textDecoration:'none'}} href="https://mdbootstrap.com/">Bank Mega</a></Navbar.Brand>
            </Stack>
          </Container>
        </Navbar>
      );
}

export default NavbarComponent;