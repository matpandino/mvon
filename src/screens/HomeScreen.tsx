import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Title, Wrapper} from '../components/common';
import ExerciseBlock from '../components/ExerciseBlock';
import WeeklySchedule from '../components/WeeklySchedule';
import {StackScreenProps} from '@react-navigation/stack';

const HomeContent = ({navigation}: StackScreenProps<null, 'Exercise'>) => {
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

export default HomeContent;
