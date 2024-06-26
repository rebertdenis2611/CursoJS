const fs = require('fs').promises;
const date = new Date();

const hora = date.getHours();
const minutos = date.getMinutes();
const segundos = date.getSeconds();
const horario = `${hora}:${minutos}:${segundos}`


