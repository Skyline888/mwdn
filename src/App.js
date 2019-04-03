import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import connect from "react-redux/es/connect/connect";
import { fetchWeather } from './action';

import LoadingPage from './components/Loader';

import { cityList } from './city';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          temperature: 21,
          humidity: 50,
          idCity: null
      };
  }



  componentDidMount(){
        this.props.getWeatherQuery(
            this.state.temperature,
            this.state.humidity
        );
        console.log(this.props.weather);
        this.setState({
            loading: false,
        })
  }



  getWeatherIcon = ( weather) => {
    switch (weather) {
        case "Clouds":
            return (
                <div className="icon cloudy">
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                </div>
            );
        case "Rain":
            return (
                <div className="icon rainy">
                    <div className="cloud"></div>
                    <div className="rain"></div>
                </div>
            );
        case "Snow":
            return (
                <div className="icon flurries">
                    <div className="cloud"></div>
                    <div className="snow">
                        <div className="flake"></div>
                        <div className="flake"></div>
                    </div>
                </div>
            );
        case "Clear":
            return (
                <div className="icon sunny">
                    <div className="sun">
                        <div className="rays"></div>
                    </div>
                </div>
            );
        default:
            return (
                <div className="icon sunny">
                    <div className="sun">
                        <div className="rays"></div>
                    </div>
                </div>
            );
    }
  };

  handleUpdateWeather = () => {
      this.props.getWeatherQuery(
          +this.state.temperature + 2 ,
          +this.state.humidity + 2
      );
  };


  render() {
    const { weather } = this.props;

    if(!weather.fetching && weather.fetched) {
        const weatherIcon = cityList.filter( img => (img.id === weather.data[1].id));

        return (
            <div className="App">
                <CssBaseline />
                <div className="page-bg">
                    <img className="page-bg__img" src={weatherIcon[0].img}/>
                </div>
                <div className="app-list">
                    {weather.data[0].map( city => {
                        return (
                            <div key={city.id}>
                                <div className="app-list__item"><b>{city.name}</b>  {city.main.temp}°C</div>
                            </div>
                        )
                    })}
                </div>
                <div className="card">
                    <img className="img-fluid img-bg" src={weatherIcon[0].img} alt="image" />
                    <div className="card-block">
                        <div className="card-block-info">
                            <div className="card-text">
                                <div>
                                    <div className="location">{weather.data[1].name}</div>
                                </div>
                            </div>
                            <div className="card-title">
                                <div>
                                    <div className="weather">{weather.data[1].main.temp} °C</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-bloc-weather-icon">
                            {this.getWeatherIcon(weather.data[1].weather[0].main)}
                        </div>
                    </div>
                    <button
                        className="button-update"
                        onClick={this.handleUpdateWeather}
                    >
                        Gender Update
                    </button>
                </div>
            </div>
        );
    } else {
        return(
            <>
                <LoadingPage />
            </>
        );
    }
  }
}

const mapStateToProps = (store) => ({
    weather: store.weather,
});

const mapDispatchToProps = ( dispatch ) => ({
    getWeatherQuery : (temperature, humidity) => {
        dispatch( fetchWeather(temperature, humidity));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

