import Survey from '../models/Survey.js';
import { check, validationResult } from 'express-validator';

//-------
const notesCtrl = {};

const checkConection = (req, res) => {
  res.json({ mensaje: 'Conection with controller ok' });
};

//index
const surveyIndex = async (req, res) => {
  try {
    const pag = req.query.pag || 1; // número de página de la consulta (por defecto es la página 1)
    const resultsPerpag = 2;
    const offset = (pag - 1) * resultsPerpag;
    const { count, rows } = await Survey.findAndCountAll({
      limit: resultsPerpag,
      offset: offset,
    });
    res.json({
      totalRecords: count,
      totalPages: Math.ceil(count / resultsPerpag),
      currentPage: pag,
      surveys: rows,
    });
  } catch (error) {
    console.error('Error when you was selected the surveys:', error);
    res.status(500).send(`Server error below:\n ${error}`);
  }
};
//store
const surveyStore = async (req, res) => {
  //_____validando campos
  await check('clientIdentification')
    .isInt()
    .notEmpty()
    .withMessage('It (Client Identification) can not be empty ')
    .run(req);
  await check('carModel').notEmpty().withMessage('It (carModel) can not be empty ').run(req);
  await check('purchaseFactors')
    .notEmpty()
    .isIn(['Reputation', 'Financing_options', 'Performance', 'Recommendations', 'Others'])
    .withMessage('Select the enum options, It (purchaseFactors) can not be empty ')
    .run(req);
  await check('testDriveRating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Values have to be from 0 to 5 ')
    .run(req);
  await check('satisfactionRating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Values have to be from 0 to 5 ')
    .run(req);

  let resultado = validationResult(req);

  //__________comprobando si el formlario es vacio
  if (!resultado.isEmpty()) {
    return res.status(500).send(resultado);
  }
  //---despues de validar
  const { clientIdentification, carModel, purchaseFactors, testDriveRating, satisfactionRating } =
    req.body;
  try {
    const survey = await Survey.create({
      clientIdentification,
      carModel,
      purchaseFactors,
      testDriveRating,
      satisfactionRating,
    });
    res.json({ survey });
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`Server error below:\n ${error}`);
  }
};
//update
const surveyUpdate = (req, res) => {
  res.json({ mensaje: 'surveyUpdate' });
};
//destroy
const surveyDestroy = (req, res) => {
  res.json({ mensaje: 'surveyDestroy' });
};

export { checkConection, surveyIndex, surveyStore, surveyUpdate, surveyDestroy };
