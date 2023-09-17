import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import bcrypt from 'bcrypt';
const User = db.define(
  'user',
  {
    fistName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async function (usuario) {
        const salt = await bcrypt.genSalt(10); // rondas de hasheo entre mas grade mas grande pero no es buenocolocar muy grande
        usuario.password = await bcrypt.hash(usuario.password, salt);
      },
    },
  }
);
//Metodos Personalizados

User.prototype.verificarPassword = function (password) {
  //_______________________password dijitada en controlador,password o instancia de la base de datos
  return bcrypt.compareSync(password, this.password);
};

export default User;
