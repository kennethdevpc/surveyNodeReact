import jwt from 'jsonwebtoken';

const authentication = (req, res, next) => {
  // Obtener el token del encabezado
  const token = req.header('Authorization');
  // Verificar si no se proporcionó un token, Verificar si hay token
  if (!token) {
    return res.status(401).json({ error: 'Access Denied: Token not provided' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    if (decoded) {
      next();
    } else {
      return 'error';
    }
    // // Verificar y decodificar el token FORMA 2 MUY LARGA
    // console.log('decooode', process.env.JWT_SECRET, 'token:', token);
    // const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    //   if (err) {
    //     res.status(400).json({ error: 'invalid token' });
    //   } else {
    //     res.status(200).json({ msj: 'The token was successfully validated' });
    //     next();
    //   }
    // }); // Reemplaza 'tu-clave-secreta' con tu clave secreta real
    // // Agregar el usuario decodificado al objeto de solicitud para su posterior uso
    // req.usuario = decoded;
    // // Continuar con la ejecución
  } catch (error) {
    res.status(400).json({ error: 'invalid token' });
  }
};
export { authentication };
