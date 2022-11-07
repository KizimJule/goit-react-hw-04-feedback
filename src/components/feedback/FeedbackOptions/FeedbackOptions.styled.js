import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  font-weight: 600;
  height: 40px;
  width: 90px;
  border: #b1cbbb;
  border-radius: 10px;
  box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
  font-size: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #92a8d1;
  }
`;
