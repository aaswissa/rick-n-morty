import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const baseURL = 'https://rickandmortyapi.com/api/character/7,23,2,47,242';

export const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className='main'>
      <h1>Chart</h1>
      <div className='chart'>
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              style={{
                height: `${item.episode.length * 8}px`,
                backgroundColor: `rgba(0,191,255, ${
                  0.1 * item.episode.length
                })`,
              }}
              className='bar'
            >
              <span>{item.episode.length}</span>
              <label>{item.name}</label>
            </div>
          ))}
      </div>
    </div>
  );
};
