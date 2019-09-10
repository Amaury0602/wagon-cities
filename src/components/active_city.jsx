import React, { Component } from 'react';

class ActiveCity extends Component {
  render() {
  const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;


    return (
      <div className="">
        <h3>{this.props.selectedCity.name}</h3>
        <p>{this.props.selectedCity.address}</p>
        <img src={src} alt="" />
        </div>
    );
  }
}

export default ActiveCity;
