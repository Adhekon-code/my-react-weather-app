import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


export default function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <h3>Hey,what's the weather like today?</h3>
        <form id="search-form" class="mb-2">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                class="form-control"
                id="city-input"
                autocomplete="off"
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="search"
                class="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="details">
          <h3>Nairobi</h3>
          <ul>
            <li>Wednesday 13:30pm</li>
            <li>Mostly Rainy</li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">
            <h3>6°C</h3>
          </div>
          <div class="col-6">
            <ul>
              <li>Precipitation</li>
              <li>Wind</li>
              <li>Humidity</li>
            </ul>
          </div>
        </div>
      </div>
      Coded by Hellen and{" "}
      <a href="https://github.com/Adhekon-code/my-react-weather-app">
        open source code
      </a>
    </div>
  );
}
