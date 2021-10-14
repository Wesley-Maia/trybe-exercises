import React, { useEffect, useState } from 'react';

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/planets')
      .then((response) => response.json())
      .then((data) => {
				setPlanets(data.planets);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Planetas</h1>
      {isLoading
        ? (<div>Carregando...</div>)
        : (
          <ul>
            {planets.map((planet) => (
              <li key={ planet.id }>{planet.name}</li>
            ))}
          </ul>
        )}
    </div>
  );
}

export default Planets;
