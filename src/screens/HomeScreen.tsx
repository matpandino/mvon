import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Title, Wrapper} from '../components/common';
import ExerciseBlock from '../components/ExerciseBlock';
import WeeklySchedule from '../components/WeeklySchedule';
import {createStackNavigator} from '@react-navigation/stack';
import ShowExercise from './ShowExercise';
import {useTheme} from 'styled-components';

const HomeStack = createStackNavigator();

const HomeContent = ({navigation}: any) => {
  const [exercices, setExercices] = useState([
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
  ]);
  return (
    <Wrapper>
      <WeeklySchedule />
      <Title>TODAY SCHEDULE</Title>
      <FlatList
        data={exercices}
        renderItem={() => <ExerciseBlock navigation={navigation} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{alignItems: 'center', width: '100%'}}
      />
    </Wrapper>
  );
};

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen
        name="Home"
        component={HomeContent}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="Exercise" component={ShowExercise} />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
