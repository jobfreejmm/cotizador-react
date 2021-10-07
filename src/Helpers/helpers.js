/* eslint-disable new-cap */
// export const diferenciaYear = (year) => {
//   Date.getFullYear(year);
// };
export function diferenciaYear(year) {
  return new Date().getFullYear() - year;
}
export const calcularMarca = (marca) => {
  let incremento;
  switch (marca) {
    case 'americano':
      incremento = 0.15;
      break;
    case 'europeo':
      incremento = 0.35;
      break;
    case 'asiatico':
      incremento = 0.05;
      break;

    default:
      break;
  }
  return incremento;
};

export function calcularPlan(plan) {
  let incremento;
  switch (plan) {
    case 'basico':
      incremento = 1.20;
      break;
    case 'completo':
      incremento = 1.50;
      break;
    default:

      break;
  }
  return incremento;
}
// Muestra la primer letra en Mayuscula
export function Capitalize(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
