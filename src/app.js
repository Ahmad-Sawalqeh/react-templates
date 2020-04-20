import React, { Component } from "react";
import Form from "./components/form/form.js";
import Weather from "./components/weather/weather.js";
import "./app.scss";

const myKey = "15a78bdf7be0fd8857aa0222e8baa4b1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      icon: '',
      main: '',
      celsius: null,
      temp_max: null,
      temp_min: null,
      description: '',
      error: false
    };
  }

  getWeather = async e => {
    e.preventDefault();

    const country = e.target.country.value;
    const city = e.target.city.value;

    if (!(country && city) || city === '' || country === '') {
      this.setState({ error: true });
      return;
    }

    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${myKey}`);

    const data = await response.json();

    this.setState({
      id: data.weather[0].id,
      city: `${data.name}, ${data.sys.country}`,
      country: data.sys.country,
      main: data.weather[0].main,
      celsius: Math.floor(data.main.temp - 273.15),
      temp_max: Math.floor(data.main.temp_max - 273.15),
      temp_min: Math.floor(data.main.temp_min - 273.15),
      description: data.weather[0].description,
      error: false
    });

  };

  render() {
    return (
      <div className="text-center">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          id={this.state.id}
          cityname={this.state.city}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;