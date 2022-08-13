import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputsComponents from './components/Inputs';
import ButtonComponent from './components/Button';
import {Container} from 'react-bootstrap'
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';
import ImageComponent from './components/image';


function App() {
  
  const [password, _] = useState('252525');
  const [validPassword, setValidPassword] = useState(false);

  return (
  <div className='Container'>
    < NavbarComponent />
    <Container className='d-flex flex-column justify-content-center p-5'>
      < ImageComponent />
      < InputsComponents  password={password} setValidPassword={setValidPassword} />
      {validPassword ? <ButtonComponent /> : null}
    </Container>
    < FooterComponent  />
  </div>
  );
}

export default App;
