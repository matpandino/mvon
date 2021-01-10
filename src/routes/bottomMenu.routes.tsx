import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ExercisesScreen from '../screens/ExercisesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomMenu = createBottomTabNavigator();

const BottomMenuRoutes = () => {
  const theme = useTheme();

  return (
    <BottomMenu.Navigator
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

          return <Icon name={iconName} size={size} color={theme.colors.text} />;
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
      <BottomMenu.Screen name="Home" component={HomeScreen} />
      <BottomMenu.Screen name="Exercises" component={ExercisesScreen} />
      <BottomMenu.Screen
        name="Profile"
        options={{}}
        component={ProfileScreen}
      />
    </BottomMenu.Navigator>
  );
};

export default BottomMenuRoutes;
