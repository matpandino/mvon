import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.secondary};
  padding: 12px;
  height: 80px;
  width: 95%;
  border-radius: 3px;
  margin-top: 4px;
`;

export const TitleDescription = styled.View`
  align-items: flex-start;
  height: 100%;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'RobotoCondensed-Regular';
  margin-top: auto;
  font-size: 16px;
`;
