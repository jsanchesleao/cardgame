import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: 1rem;
  width: 100%;
  background-color: white;
  color: black;
  border: 1px solid black;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all .1s ease-in-out;

  &:hover {
    box-shadow: -3px 3px 5px black;
    transform: translate(3px, -3px);
    background-color: lightgray;
  }

  &:focus {
    background-color: lightgray;
    outline: none;
  }

`;

export const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-size: 1.2rem;
  overflow: visible;
  line-height: 1.5em;
  vertical-align: text-bottom;
  position: relative;

  &:focus {
    outline: none;
  }
`;