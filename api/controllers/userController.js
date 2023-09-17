import User from '../models/User.js';
import { check, validationResult } from 'express-validator';
import { createTokenJWT } from '../helpers/token.js';

//------get fromulario registro
//_______inDevelopment
const checkConection = (req, res) => {
  res.json({ mensaje: 'Conection with controller ok' });
};
//_______finInDevelopment

const signUp = async (req, res) => {
  await check('fistName').notEmpty().withMessage('Name need a value ').run(req);
  await check('lastName').notEmpty().withMessage('lastName need a value ').run(req);
  await check('email').isEmail().withMessage('Email need a value type Email ').run(req);
  await check('password').isLength({ min: 6 }).withMessage('Password is very short ').run(req);
  await check('repeat_password')
    .equals(req.body.password)
    .withMessage('password is diferent!')
    .run(req);

  //__________comprobando si el formlario es vacio y validar formulario
  let resultValidations = validationResult(req);
  if (!resultValidations.isEmpty()) {
    return res.status(500).send(resultValidations);
  }
  //---despues de validar

  const { fistName, lastName, email, password } = req.body;
  const userExist = await User.findOne({ where: { email } });

  //__________comprobando si el usuario esta registrado
  if (userExist) {
    return res.status(401).send({
      error: 'Sorry, the User is already registered',
      user: {
        name: fistName,
        lastName: lastName,
        email: email,
      },
    });
  }
  //__________fin comprobando si el usuario esta reistrado
  //__________Registro de usuario
  try {
    const user = await User.create({ fistName, lastName, email, password });
    res.json({
      msg: 'The user was successfully registered',
      user: {
        name: fistName,
        lastName: lastName,
        email: email,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`Server error below:\n ${error}`);
  }
};
const signIn = async (req, res) => {
  await check('fistName').notEmpty().withMessage('Name need a value ').run(req);
  await check('email').isEmail().withMessage('Email need a value type Email ').run(req);
  await check('password').isLength({ min: 6 }).withMessage('Password is very short ').run(req);
  //__________comprobando si el formlario es vacio y validar formulario
  let resultValidations = validationResult(req);
  if (!resultValidations.isEmpty()) {
    return res.status(500).send(resultValidations);
  }
  //---------despues de validar------------------------------------

  const { fistName, email, password } = req.body;
  const userExist = await User.findOne({ where: { email } });

  //______comprobando si el usuario esta registrado
  if (!userExist) {
    return res.status(401).send({
      error: 'Sorry, user does not exist!',
      user: {
        name: fistName,
        email: email,
      },
    });
  }
  //---------fin comprobando si el usuario esta reistrado---------
  //______revisar el password

  if (!userExist.verificarPassword(password)) {
    return res.status(401).send({
      error: 'Sorry, user or password incorrect!',
      user: {
        name: fistName,
        email: email,
      },
    });
  }
  //---------finrevisar el password---------------------------------
  //_________Autenticar el usuario
  const token = createTokenJWT(userExist);
  console.log('token_____', token);

  //---------Autenticar el usuario

  res.send({ userExist, token });
};
export { checkConection, signUp, signIn };
