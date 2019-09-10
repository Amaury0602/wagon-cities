import React, { Component } from 'react';
import { cities } from './app';

class City extends Component {

  handleClick = () => {
    this.props.selectCity(this.props.index);
  }

  render() {
    return (
      <div className={this.props.index === this.props.selectedCity ? "selected-city" : "city"} onClick={this.handleClick}>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default City;
