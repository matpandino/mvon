import React from 'react';
import {Title2} from '../common/Text';
import {Container, Weekdays} from './styles';

const WeeklySchedule = () => {
  return (
    <Container>
      <Title2>Weekly workout</Title2>
      <Weekdays>M t w t f s s</Weekdays>
    </Container>
  );
};

export default WeeklySchedule;
