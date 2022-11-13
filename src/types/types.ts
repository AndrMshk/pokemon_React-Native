import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStack = {
  Home: undefined
  Details: {
    url: string
  }
}

export type PokemonItem = {
  name: string
  url: string
}

export type Pokemon = {
  id: number
  name: string
  sprites: {
    other: {
      'official-artwork': {
        'front_default': string
      }
    }
  }
}

export type DetailsPropsType = NativeStackScreenProps<RootStack, 'Details'>

export type NavigationUseType = NavigationProp<RootStack>

export const useAppNavigation = () => useNavigation<NavigationUseType>();
