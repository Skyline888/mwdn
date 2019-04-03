import {cityList} from "../city";

const key = 'a3f6e2ae7bb5f17e77bb6ee99f6c4a0a'; //c6cdb51573c38756e6f579c7aacb1d6c
const cityArr = cityList.map( c => c.id).join(',');
export const getAllCityLink = 'http://api.openweathermap.org/data/2.5/group?id=' + cityArr + '&APPID=' + key + '&units=metric';