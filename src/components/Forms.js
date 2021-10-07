/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { diferenciaYear, calcularMarca, calcularPlan } from '../Helpers/helpers';
// Componente para los contenedores de los input
const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
// Componente la los label
const Label = styled.label` 
   flex:0 0 100px;
`;
// Componente para los select
const Select = styled.select`
   display: block;
   width: 100%;
    /* background-color: burlywood; */
   padding: 1rem;
   border: 1px solid #e1e1e1;
   /* Quita la apariencia natural de un elemento */
   --webkit-appearance:none;

`;
// Componente para los Radio Buttons

const Radio = styled.input`
    margin: 0 1rem
`;
// STyled component para el boton
const Button = styled.button`
   background-color: #00838f;
   font-size: 16px;
   width: 100%;
   padding: 1rem;
   color:#fff;
   text-transform: uppercase;
   font-weight: bold;
   border: none;
   transition: background-color .3s ease-out;
   margin-top: 2rem;
   &:hover{
       cursor: pointer;
       background-color: #26c6da;
   }

`;
// Componente para mostrar un error
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align:center;
    margin-bottom: 2rem;
`;
const Forms = ({ setResumen, setCargar }) => {
  // Estado para los datos del formulario
  const [datos, setDatos] = React.useState({
    marca: '',
    year: '',
    plan: '',

  });
  // Estado para detectar un error en la validacion
  const [error, setError] = React.useState(false);
  const { marca, year, plan } = datos;
  // Funcion para guardar datos de los inputs del formulario
  const onChangeDatos = (e) => {
    e.preventDefault();
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  // Funcion para enviar datos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion
    if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    // Iniciamos con una base  de 2000
    let resultado = 2000;
    // Obtener la diferencia de años
    const diferencia = diferenciaYear(year);
    console.log(diferencia);
    // Por cada año hay que restar el 3%
    resultado -= ((diferencia * 3) * resultado) / 100;
    console.log(resultado);
    // Amaericano 15
    // Asiatico 5%
    // Europeo 30%
    const porcentajeMarca = calcularMarca(marca);
    resultado += (porcentajeMarca * resultado);

    // Basico  aumenta 20%
    // Completo aumenta 50%
    const porcentajePlan = calcularPlan(plan);
    resultado = parseFloat(porcentajePlan * resultado).toFixed(2);
    // Total
    // Cargamos el spinner
    setCargar(true);
    // Mandamos el resultado al state de resumen
    setTimeout(() => {
      setResumen({
        cotizacion: +resultado,
        datos,
      });
      setCargar(false);
    }, 4000);
  };

  return (

    <form onSubmit={handleSubmit}>
      {error ? <Error>Todos los campos son obligatorios </Error> : null}
      <Campo>
        <Label htmlFor="marca">
          Marca
        </Label>
        <Select name="marca" value={marca} onChange={onChangeDatos}>
          <option value="">--Seleccione--</option>
          <option value="americano">Americano </option>
          <option value="europeo">Europeo </option>
          <option value="asiatico">Asiatico </option>
        </Select>
      </Campo>

      <Campo>
        <Label htmlFor="year">
          Año
        </Label>
        <Select name="year" value={year} onChange={onChangeDatos}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label htmlFor="plan">
          Plan
        </Label>
        <Radio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === 'basico'}
          onChange={onChangeDatos}
        />
        Basico
        <Radio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === 'completo'}
          onChange={onChangeDatos}
        />
        Completo
      </Campo>
      <Button type="submit">
        Cotizar
      </Button>
    </form>
  );
};

Forms.propTypes = {
  setResumen: PropTypes.func.isRequired,
  setCargar: PropTypes.func.isRequired,
};

export default Forms;
