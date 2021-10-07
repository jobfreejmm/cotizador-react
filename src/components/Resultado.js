/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Componente para mostrar mensaje
const Mensaje = styled.p`
   background-color: rgb(127,224, 237);
   margin-top: 2rem;
   padding: 1rem;
   text-align: center;
`;
// Cmponente para wrappear el componente resultado
const ResultadoContainer = styled.div`
   text-align:center;
   padding: .5rem;
   border: 1px solid #26c6da;
   background-color: rgb(127,224, 237);
   margin-top: 1rem ;
`;

// Componente para mostrar el resultado
const TextoResultado = styled.p`
   color: #00838f;
   padding: 1rem;
   text-transform: uppercase;
   font-weight: bold;
   margin: 0;
   position: relative;
`;

const Resultado = ({ cotizacion }) =>
// if (cotizacion === 0) return null;
  (
    (cotizacion === 0 ? (<Mensaje>Eligr Marca, Año y Plan</Mensaje>)
      : (
        <ResultadoContainer>
          <TransitionGroup
            component="p"
            className="resultado"
          >
            <CSSTransition
              classNames="resultado"
              key={cotizacion}
              timeout={{ enter: 500, exit: 500 }}
            >
              <TextoResultado>
                EL total es
                {'$ '}
                <span>
                  $
                  {cotizacion}
                </span>
              </TextoResultado>
            </CSSTransition>
          </TransitionGroup>
        </ResultadoContainer>
      )
    )
  );
Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};
export default Resultado;
