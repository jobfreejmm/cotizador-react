/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Forms from './components/Forms';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
//  Se crea el componente COntainer para centrar el contenido
const Container = styled.div`
   max-width: 600px;
   margin: 0 auto;
 `;
// Creamos un contenedor para el formulario

const FormContainer = styled.div`
 background-color: #fff;
 padding: 3rem;
 
 `;
const ContainerSpinner = styled.div`
 /* background-color: black; */
 display: flex;
 justify-content: center;
 justify-content: center;
 padding: 3rem;
 margin: 1rem 0 0 0 ;
 
 `;

function App() {
  // Etado para el resumen de la cotizacion o resultado
  const [resumen, setResumen] = React.useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: '',
    },
  });
  // Estado ñpara mostrar el spinner
  const [cargar, setCargar] = React.useState(false);
  const { datos, cotizacion } = resumen;
  console.log('datos', datos);
  // Si datos son undefined
  return (
    <Container>

      <Header titulo="Cotizador de seguros" />
      <FormContainer>
        <Forms setResumen={setResumen} setCargar={setCargar} />
        {/* { datos ? (<Resumen />) : null }  Forma para ocultar el resumen */}
        {cargar ? (
          <ContainerSpinner>
            <Spinner />
          </ContainerSpinner>
        ) : null}
        { !cargar ? (
          <div>
            <Resumen datos={datos} />
            <Resultado cotizacion={cotizacion} />
          </div>
        ) : null}
      </FormContainer>
    </Container>
  );
}

export default App;
