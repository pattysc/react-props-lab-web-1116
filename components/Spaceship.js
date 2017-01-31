import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render(){
    return(
      <p>
        <div> {this.props.name} </div>
        <div> {this.props.speed} </div>
        <div> {this.props.hasRockets} </div>
        <small>{this.props.colors.join(',')}</small>
      </p>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}
