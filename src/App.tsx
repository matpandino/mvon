import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {StatusBar, useColorScheme} from 'react-native';

import themes from './styles/themes';
import Home from './screens/Home';
import Exercises from './screens/Exercises';
import Profile from './screens/Profile';
import {color} from 'react-native-reanimated';

const {Navigator, Screen} = createBottomTabNavigator();

const App = () => {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme || 'dark'];

  return (
    <>
      <NavigationContainer>
        <StatusBar
          backgroundColor={theme.colors.background}
          barStyle={theme.title === 'dark' ? 'light-content' : 'dark-content'}
        />

        <ThemeProvider theme={theme}>
          <Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, size}) => {
                let iconName = 'heart';

                switch (route.name) {
                  case 'Home':
                    iconName = focused ? 'heart' : 'heart-outline';
                    break;
                  case 'Exercises':
                    iconName = focused ? 'ios-barbell' : 'ios-barbell-outline';
                    break;
                  case 'Profile':
                    iconName = focused
                      ? 'person-circle-sharp'
                      : 'person-circle-outline';
                    break;

                  default:
                    break;
                }

                return (
                  <Icon name={iconName} size={size} color={theme.colors.text} />
                );
              },
            })}
            tabBarOptions={{
              inactiveTintColor: 'gray',
              style: {
                backgroundColor: theme.colors.background,
                borderTopWidth: 0.5,
              },
              showLabel: false,
            }}>
            <Screen name="Home" component={Home} />
            <Screen name="Exercises" component={Exercises} />
            <Screen name="Profile" component={Profile} />
          </Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
