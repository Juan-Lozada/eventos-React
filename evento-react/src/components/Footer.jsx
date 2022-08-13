import {Container} from 'react-bootstrap';

const FooterComponent = () => {
return (    
        <footer className='text-center text-lg-start text-light' style={{backgroundColor: '#2C3333'}}>
            <Container className='d-flex justify-content-between align-items-center'>
                <h4 className='d-flex justify-content-start col-md-4'>About us</h4>
                <div className='d-flex justify-content-center col-md-4 flex-column'>
                    <div class="text-center p-4" style={{backgroundColor: '#2C3333'}}>
                        © 2021 Copyright
                        <a class="text-reset fw-bold m-2" style={{textDecoration:'none'}} href="https://mdbootstrap.com/">Bankmega.com/react</a>
                    </div>
                </div>
                <h4 className='d-flex justify-content-end col-md-4 m-5 text-light'><a  href='mailto:BankCorp@gmail.com' className="text-light text-decoration-none">Contactanos</a></h4>
            </Container>
        </footer>
    )
}

export default FooterComponent;