import React, { Component } from "react";
import Car from "./components/car.js";
import Wrapper from "./components/wrapper.js";
import cars from "./cars.json";
import "./App.css";

class App extends Component {
  state = {
    cars
  };
  removeCar = id => {
    const cars = this.state.cars.filter(cars => cars.id !== id);
    this.setState({ cars });
  };
  render() {
    return (
      <Wrapper>
        {this.state.cars.map(car => (
          <Car
            removeCar={this.removeCar}
            id={car.id}
            key={car.id}
            brand={car.brand}
            image={car.image}
            color={car.color}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
