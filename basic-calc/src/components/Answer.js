import React from 'react';
export default class Answer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        answer: {
          result: props.result
        }
      }
    }
    handleButtonClicked() {
        console.log(this.state.result);
      }
    render() {
        return (
        <label type="text" value={this.state.answer.result}>
        
        </label>
        );
        }

  }
// export default Answer;