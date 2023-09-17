import jwt from 'jsonwebtoken';

const createTokenJWT = (data) => {
  // Generar y devolver un token JWT
  const payload = { id: data.id, fistName: data.fistName };
  try {
    return jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 }
      // 1 hora (ajustable), por ejemplo 1 dia='1d' '3m'=3minutos
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`Server error below:\n ${error}`);
  }
};

export { createTokenJWT };
