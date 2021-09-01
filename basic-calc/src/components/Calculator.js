// import logo from './logo.svg';
// import './App.css';
import Button from './Button';
import Answer from './Answer';
import React from "react";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Calculator extends React.Component {
  // state = {
  //   number: 0
  // };

  // getNumber = (event) => {
  //   if(event.target.value != '/'
  //   || event.target.value != '+'
  //   || event.target.value != '-'
  //   || event.target.value != '*'){
  //     this.state.number+=event.target.value
  //     console.log(this.state.number)
  //   }
  // }
  concatenateNumber = (event) => {
    this.setState(
      prevState => ({ count: prevState.count + event.target.value })
    )
    console.log(event.target.value)
  };
  render(){
    return (
      <div >
        <Container >
          <Row className="justify-content-md-center">
            <Col>
              <Button value={'1'}/>
              <Button value={'2'} />
              <Button value={'3'} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button value={'4'} />
              <Button value={'5'} />
              <Button value={'6'} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button value={'7'} />
              <Button value={'8'} />
              <Button value={'9'} />
            </Col>
            
          </Row>
          <Row>
            <Col>
              <Button value={'0'} />
              <Button value={'Clear'} />
              <Button value={'Delete'} />
              <Button value={'.'} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button value={'-'} />
              <Button value={'x'} />
              <Button value={'/'} />
              <Button value={'='} />
            </Col>
          </Row>
          <Row><Answer value={this.concatenateNumber}/></Row>
        </Container>

    </div>
    );
  }
}

  export default Calculator;
