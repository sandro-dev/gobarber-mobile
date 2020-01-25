import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 58px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.8)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 5px;
  margin-top: 10px;
  color: #fff;
`;
