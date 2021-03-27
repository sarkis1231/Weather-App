import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #3f3f3f;
`;
export const Dots = styled.span`
  font-size: 23px;
  color: #e5e5e5;
  font-family: 'Poppins', sans-serif;
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;

const Loader = ({ title }: { title: string }) => (
  <LoaderContainer>
    <Dots>{title}</Dots>
  </LoaderContainer>
);

export default Loader;
