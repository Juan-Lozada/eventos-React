import { Button } from 'react-bootstrap';
import Inputs from './Inputs';

const ButtonComponent = () => {
    
    const PasswordValidator = () => (e) => {
        console.log(PasswordValidator)
    }

    return (
        <Button variant="outline-info"  style={{backgroundColor: '#2C3333'}}> Ingresar </Button>
    )
}

export default ButtonComponent;

