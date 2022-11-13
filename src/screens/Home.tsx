import React, { FC, useEffect } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PokemonItem, useAppNavigation } from '../types/types';
import { useAppDispatch, useAppSelector } from '../bll/store';
import { getAllPokemons } from '../bll/pokemonsReducer';

type HomePropsType = {}

export const Home: FC<HomePropsType> = ({}) => {

  const navigation = useAppNavigation();

  const dispatch = useAppDispatch();

  const allPokemons = useAppSelector(state => state.pokemons.allPokemons);

  useEffect(() => {dispatch(getAllPokemons());}, []);

  const renderItem: ListRenderItem<PokemonItem> = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => {navigation.navigate('Details', { url: item.url });}}>
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={allPokemons}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
  },
  item: {
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    width: '100%',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  name: {
    fontSize: 22,
  },
});
