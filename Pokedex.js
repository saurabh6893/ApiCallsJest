import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {apidata} from './api';
const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    apidata()
      .then(data => setPokemons(data.results))
      .catch(e => setError(true));
  }, []);

  return error ? (
    <View>
      <Text>unable to grab</Text>
    </View>
  ) : (
    <View>
      {pokemons.map(p => (
        <View>
          <Text>{p.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Pokedex;
