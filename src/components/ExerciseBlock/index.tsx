import React from 'react';
import {Title, Title2} from '../common/Text';
import {Container, TitleDescription, Text} from './styles';

const ExerciseBlock = () => {
  return (
    <Container>
      <TitleDescription>
        <Title2>Generic exercise</Title2>
        <Text>3x 20 | 15 min</Text>
      </TitleDescription>
      <Title style={{fontSize: 50}}>{'>'}</Title>
    </Container>
  );
};

export default ExerciseBlock;
