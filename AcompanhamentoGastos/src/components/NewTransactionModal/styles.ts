import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  
  input {
    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    font-size: 1rem;
    height: 4rem;
    margin: 0 0 1rem;
    padding: 0 1.5rem;
    width: 100%;
    
    &::placeholder {
      color: var(--text-body);
    }
  }
  
  button[type="submit"] {
    background-color: var(--green);
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    height: 4rem;
    margin: 1.5rem 0 0;
    padding: 0 1.5rem;
    transition: filter 0.2s;
    width: 100%;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  align-items: center;
  background-color: ${({ isActive, activeColor }) => isActive ? transparentize(0.9, colors[activeColor]) : '#e7e9ee'};
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  display: flex;
  font-size: 1rem;
  height: 4rem;
  justify-content: center;
  transition: border-color 0.2s;
  width: 100%;
  
  &:hover {
    border-color: #aaa;
  }
  
  img {
    height: 20px;
    margin-right: 1rem;
    width: 20px;
  }
  
  span {
    color: var(--text-title);
    display: inline-block;
    font-size: 1rem;
    line-height: 1rem;
    margin: 0 1rem;
  }
`;