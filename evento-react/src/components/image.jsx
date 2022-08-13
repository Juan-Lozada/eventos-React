import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

function ImageComponent() {
  return (
    <>
      <Container className='d-flex justify-content-center'>
        <Row>
          <Col>
            <Image src='https://www.pngall.com/wp-content/uploads/4/Cyber-Security-Logo-PNG.png' className='' style={{width: 388}} />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default ImageComponent
