import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Details } from './screens/Details';
import { RootStack } from './types/types';

const Stack = createNativeStackNavigator<RootStack>();

export const Main = ({}) => {

  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Details'} component={Details} />
    </Stack.Navigator>
  );
};

