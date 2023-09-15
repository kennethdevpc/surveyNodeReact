import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
const { DB_USER, DB_PASSWORD, DB_HOST, DB_name, DB_PORT } = process.env;

const db = new Sequelize(DB_name, DB_USER, DB_PASSWORD, {
  dialect: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  define: {
    timestamps: true,
  },
});

try {
  db.authenticate();
  console.log('Conection With Sequelize end database okey');
} catch (error) {
  console.error('Error, we canot connet the database', error);
}

export default db; //Ecmascript
//module.exports = db; //CommonJS modules
