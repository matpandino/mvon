import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'RobotoCondensed-Regular';
  text-transform: uppercase;
  font-size: 18px;
`;

export const Title2 = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'RobotoCondensed-Bold';
  text-transform: uppercase;
  font-size: 18px;
`;
