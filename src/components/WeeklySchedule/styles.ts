import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;

  margin-bottom: 16px;
  padding: 8px;
  width: 100%;
`;

export const Weekdays = styled.Text`
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 8px;
`;
