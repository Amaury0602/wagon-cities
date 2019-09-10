import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city, index) => {
          return (
            <City name={city.name} key={city.name} selectCity={this.props.selectCity} selectedCity={this.props.selectedCity} index={index} />
          );
        })}
      </div>
    );
  }
}

export default CityList;
