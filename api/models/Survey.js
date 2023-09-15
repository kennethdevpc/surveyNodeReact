import { DataTypes } from 'sequelize';
import db from '../config/db.js';
const Survey = db.define('surveys', {
  //idCliente
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
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
    type: DataTypes.TEXT,
  },
  //calificacionPruebaManejo
  testDriveRating: {
    type: DataTypes.INTEGER,
  },
  //calificacionSatisfaccion
  satisfactionRating: {
    type: DataTypes.INTEGER,
  },
});

export default Usuario;
