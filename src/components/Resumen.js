/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Capitalize } from '../Helpers/helpers';

const ResumenContainer = styled.div`
   padding: 1rem;
   text-align: center;
   background-color: #00838f;
   color: #fff;
   margin-top: 1rem;
`;
const Resumen = ({ datos }) => {
  console.log('');
  const { marca, year, plan } = datos;
  // Segunda Forma para ocultar el resumen
  if (marca === '' || year === '' || plan === '') return null;
  return (
    <ResumenContainer>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>
          Marca:
          {' '}
          {Capitalize(marca)}
        </li>
        <li>
          Año:
          {' '}
          {year}
        </li>
        <li>
          Plan:
          {' '}
          {Capitalize(plan)}
        </li>
      </ul>
    </ResumenContainer>
  );
};
Resumen.propTypes = {
  datos: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Resumen;
