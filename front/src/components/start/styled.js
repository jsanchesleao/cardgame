import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BlockList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10rem;
  border-right: 1px solid black;

  &:last-child {
    border-right: none;
  }
`;

export const FormControl = styled.div`
  margin: 2em 0;
`;