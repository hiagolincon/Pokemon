import React, { useEffect, useState } from 'react';

import { Container, List, Skills, ListBox } from './styles';
import api from '../../services/api';

interface PokemonsDataProps {
  name: string;
  stat: {
    name: string;
  };
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonsDataProps[]>([]);
  const [base_stat, setBaseStat] = useState<number[]>([]);
  useEffect(() => {
    const pokemonDataName = async (): Promise<void> => {
      const response = await api.get('/');

      const { results } = response.data;

      setPokemons(results);
    };

    const pokemonSkills = async (): Promise<void> => {
      const response = await api.get('/1');

      const { stats } = response.data;

      stats.map((i: any): void => {
        setBaseStat(i.base_stat);
      });

      console.log(base_stat);
    };

    pokemonSkills();
    pokemonDataName();
  }, [base_stat, pokemons]);

  return (
    <Container>
      <h1>Pokemons</h1>
      <List>
        {pokemons.map((pokemon, index) => (
          <ListBox>
            {/* <img src={} alt="" /> */}
            <h2>{pokemon.name}</h2>
            <Skills>
              <div>
                <h3>HP</h3>
                <p>{base_stat[1]}</p>
              </div>
              <div>
                <h3>Attack</h3>
                <p>80</p>
              </div>
              <div>
                <h3>Defense</h3>
                <p>80</p>
              </div>

              <div>
                <h3>SA</h3>
                <p>80</p>
              </div>
              <div>
                <h3>SD</h3>
                <p>80</p>
              </div>
              <div>
                <h3>Speed</h3>
                <p>80</p>
              </div>
            </Skills>
          </ListBox>
        ))}
      </List>
    </Container>
  );
};

export default Home;
