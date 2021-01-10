import React from 'react';
import {Image, Text} from 'react-native';
import {Title, Wrapper, Content} from '../components/common';
import defaultImg from '../../assets/peepo.png';

const ShowExercise = () => {
  return (
    <Wrapper>
      <Image
        style={{width: 50, height: 50, marginRight: 16}}
        source={defaultImg}
      />
      <Content>
        <Title>sda</Title>
      </Content>
    </Wrapper>
  );
};

export default ShowExercise;
