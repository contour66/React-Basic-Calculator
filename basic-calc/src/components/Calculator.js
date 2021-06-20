// import logo from './logo.svg';
// import './App.css';
import Button from './Button';
import React from "react";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Calculator extends React.Component {
  render(){
    return (
      <div >
        <Container >
          <Row className="justify-content-md-center">
            <Col>
              <Button label={'1'} className="btn-styles" ></Button>
              <Button label={'2'} className="btn-styles" ></Button>
              <Button label={'3'} className="btn-styles" ></Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button label={'4'} className="btn-styles" ></Button>
              <Button label={'5'} className="btn-styles" ></Button>
              <Button label={'6'} className="btn-styles" ></Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button label={'7'} className="btn-styles" ></Button>
              <Button label={'8'} className="btn-styles" ></Button>
              <Button label={'9'} className="btn-styles" ></Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button label={'0'} className="btn-styles" ></Button>
              <Button label={'Clear'} className="btn-styles" ></Button>
              <Button label={'Delete'} className="btn-styles" ></Button>
              <Button label={'.'} className="btn-styles" ></Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button label={'-'} className="btn-styles" ></Button>
              <Button label={'x'} className="btn-styles" ></Button>
              <Button label={'/'} className="btn-styles" ></Button>
              <Button label={'='} className="btn-styles" ></Button>
            </Col>
          </Row>
        </Container>
    </div>
    );
  }
}

  export default Calculator;
