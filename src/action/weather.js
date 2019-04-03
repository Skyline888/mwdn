import axios from 'axios';
import { getAllCityLink, getSortCity } from '../helper';


export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILED = "FETCH_WEATHER_FAILED";


export function fetchWeather(temperature, humidity) {
    return function(dispatch) {
        axios.get(getAllCityLink)  //
            .then( response => getSortCity(response, temperature, humidity))
            .then( response => {
                dispatch({type: FETCH_WEATHER_SUCCESS, payload: response});
            })
            .catch( err => {
                dispatch({type: FETCH_WEATHER_FAILED, payload: err});
            })
    }
}