import { DataTypes } from 'sequelize';
import db from '../config/db.js';
const Survey = db.define('surveys', {
  //idCliente por defecto
  //identificacionCliente
  clientIdentification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //modeloAutomovil
  carModel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //factoresCompra
  purchaseFactors: {
    type: DataTypes.ENUM(
      // Utilizar ENUM para opciones predefinidas
      'Reputation',
      'Financing_options',
      'Performance',
      'Recommendations',
      'Others'
    ),
    allowNull: false,
  },

  //calificacionPruebaManejo
  testDriveRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // Validar que esté dentro del rango de 1 a 5
      max: 5,
    },
  },
  //calificacionSatisfaccion
  satisfactionRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // Validar que esté dentro del rango de 1 a 5
      max: 5,
    },
  },
});

export default Survey;
