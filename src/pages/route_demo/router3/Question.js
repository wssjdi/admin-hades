import React from 'react';


export default class Question extends React.Component{

  render(){
    return (
      <div>
        Question Pages:<br/>
        this Question's Answer: {this.props.match.params.questionId}
      </div>
    );
  }
}