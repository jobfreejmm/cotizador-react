/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #fff
`;
const TextoHedaer = styled.h1`
  font-size:2rem;
  font-family: 'Slabo 27px',serif;
  text-align: center;
  margin: 0;
`;

const Header = ({ titulo }) => {
  console.log('test');
  return (
    <ContenedorHeader>
      <TextoHedaer>{titulo}</TextoHedaer>
    </ContenedorHeader>
  );
};
Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
