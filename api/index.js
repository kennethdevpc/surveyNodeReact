import bodyParser from 'body-parser'; // const bodyParser = require('body-parser');
import express from 'express'; // E
import cors from 'cors'; // const cors = require('cors');
import db from './config/db.js';
import surveyRoutes from './routes/surveyRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
//conexion a base de datos:-----------------------------
const port = process.env.PORT || 3200;

(async function connectToDatabase() {
  try {
    await db.authenticate();
    console.log('Connection established successfully.');
    await db.sync({ force: true }); // sync sincroniza los objetos del modelo con las tablas correspondientes en tu base de datos.
    console.log(`Models synced successfully. \n Server: http://localhost:${port}/`);
  } catch (err) {
    console.error(`Failed to connect or sync: ${err}`);
  }
})();

//routing--------
app.get('/', (req, res) => {
  res.json({ mensaje: 'Checkin conextion' });
});
app.use('/market', surveyRoutes);
app.use('/auth', userRoutes);

//conexion-------
app.listen(port, () => {
  console.log(`el servidor esta en ${port}`);
});
