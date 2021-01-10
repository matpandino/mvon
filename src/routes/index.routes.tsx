import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import BottomMenu from './bottomMenu.routes';
import ShowExercise from '../screens/ShowExercise';
import {useTheme} from 'styled-components';

const Stack = createStackNavigator();

const RootRoutes = () => {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.title === 'dark' ? 'light-content' : 'dark-content'}
      />

      <Stack.Navigator
        screenOptions={() => ({
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.text,
          cardStyle: {backgroundColor: 'transparent'},
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },

            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        })}>
        <Stack.Screen name="MainPages" component={BottomMenu} />
        <Stack.Screen name="Exercise" options={{}} component={ShowExercise} />
      </Stack.Navigator>
    </>
  );
};

export default RootRoutes;
