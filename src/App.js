import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f6875be64fc833e4c2f7500665728cdd`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div className='app'>
      <div className='search'>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type='text'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            <h1>
              {data.main ? data.main.temp.toFixed() + '°C' : null}
            </h1>
          </div>
          <div className='description'>
            <p>{data?.weather?.[0].main}</p>
          </div>
        </div>
        {data.name && (
          <div className='bottom'>
            <div className='feels'>
              <p className='bold'>
                {data.main
                  ? data.main.feels_like.toFixed() + ' °C'
                  : null}
              </p>
              <p>Feels Like</p>
            </div>
            <div className='humidity'>
              <p className='bold'>
                {data.main ? data.main.humidity + ' %' : null}
              </p>
              <p>Humidity</p>
            </div>
            <div className='wind'>
              <p className='bold'>
                {data.wind ? ((data.wind.speed * 60 * 60) / 1000).toFixed() + ' km/h' : null}
              </p>
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
