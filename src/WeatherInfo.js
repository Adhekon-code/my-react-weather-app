import React from "react";
import FormateDate from "./FormateDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormateDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-3">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />{" "}
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="number">
            <WeatherTemp celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-3 ms-auto">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind}km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
