import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const baseURL = 'https://rickandmortyapi.com/api/character/?name=evil';

export const Cards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.results);
    });
  }, []);

  return (
    <div className='main'>
      <h1>Cards</h1>
      <div className='container'>
        <div className='cards'>
          {data &&
            data.map((item, index) => {
              return (
                <div key={index} className='card'>
                  <img width={'180px'} src={item.image} alt={item.name} />
                  <div>
                    <b>{item.name}</b>
                  </div>
                  <div>Location: {item.location.name}</div>
                  <div>Status: {item.status}</div>
                  <div>Species: {item.species}</div>
                  <div>Gender: {item.gender}</div>
                  <div>Popularity: {item.episode.length}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
