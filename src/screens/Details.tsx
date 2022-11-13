import React, { FC, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DetailsPropsType } from '../types/types';
import { useAppDispatch, useAppSelector } from '../bll/store';
import { clearPokemon, getPokemon } from '../bll/pokemonsReducer';

export const Details: FC<DetailsPropsType> = ({ route }) => {

  const dispatch = useAppDispatch();

  const pokemon = useAppSelector(state => state.pokemons.pokemon);

  useEffect(() => {
    dispatch(getPokemon({ url: route.params.url }));
    return () => {dispatch(clearPokemon());};
  }, []);

  return (
    <View style={styles.container}>
      {pokemon &&
      <>
        <Text style={styles.mame}>{pokemon.name}</Text>
        <Image
          style={styles.image}
          source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
        />
      </>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mame: {
    fontSize: 25,
  },
  image: {
    width: 150,
    height: 150,
  },
});
