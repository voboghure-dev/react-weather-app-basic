import axios from "axios";

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=f6875be64fc833e4c2f7500665728cdd`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dhaka</p>
          </div>
          <div className="temp">
            <h1>60 deg</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65 deg</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;