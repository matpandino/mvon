import React from 'react';
import {Title, Wrapper} from '../components/common';
import ExerciseBlock from '../components/ExerciseBlock';
import WeeklySchedule from '../components/WeeklySchedule';

const Home = () => {
  return (
    <Wrapper>
      <WeeklySchedule />
      <Title>TODAY SCHEDULE</Title>
      <ExerciseBlock />
      <ExerciseBlock />
      <ExerciseBlock />
      <ExerciseBlock />
      <ExerciseBlock />
      <ExerciseBlock />
    </Wrapper>
  );
};

export default Home;
