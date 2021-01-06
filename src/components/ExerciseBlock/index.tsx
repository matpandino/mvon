import React from 'react';
import {Image, View} from 'react-native';
import {Container, Title, TitleDescription, Text} from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import defaultImg from './peepo.png';

const ExerciseBlock = ({navigation}: any) => {
  return (
    <Container onPress={() => navigation.navigate('Exercise')}>
      <TitleDescription>
        <View>
          <Image
            style={{width: 50, height: 50, marginRight: 16}}
            source={defaultImg}
          />
        </View>
        <View>
          <Title>Generic exercise</Title>
          <Text>3x 20 | 15 min</Text>
        </View>
      </TitleDescription>
      <SimpleLineIcons name="arrow-right" size={16} color="#fff" />
    </Container>
  );
};

export default ExerciseBlock;
