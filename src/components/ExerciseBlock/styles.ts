import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.secondary};
  padding: 12px;
  height: 80px;
  min-width: 95%;
  max-width: 95%;
  border-radius: 3px;
  margin-top: 4px;
`;

export const TitleDescription = styled.View`
  align-items: center;
  flex-direction: row;
  height: 100%;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'RobotoCondensed-Bold';
  text-transform: uppercase;
  font-size: 18px;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'RobotoCondensed-Regular';
  margin-top: auto;
  font-size: 16px;
`;
