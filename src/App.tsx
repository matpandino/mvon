import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {StatusBar, useColorScheme} from 'react-native';

import themes from './styles/themes';
import HomeScreen from './screens/HomeScreen';
import ExercisesScreen from './screens/ExercisesScreen';
import ProfileScreen from './screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();

const App = () => {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme || 'dark'];

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar
            backgroundColor={theme.colors.background}
            barStyle={theme.title === 'dark' ? 'light-content' : 'dark-content'}
          />

          <BottomTab.Navigator
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
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Exercises" component={ExercisesScreen} />
            <BottomTab.Screen name="Profile" component={ProfileScreen} />
          </BottomTab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
