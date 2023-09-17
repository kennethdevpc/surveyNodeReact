import express from 'express';
import { checkConection, signUp, signIn } from '../controllers/userController.js';
const router = express.Router();

//_______inDevelopment
router.get('/checkConectionRoutes', (req, res) => {
  res.json({ mensaje: 'route survey conected' });
});
router.get('/checkConectionController', checkConection);
//_______finInDevelopment
router.post('/user/signUp', signUp);
router.post('/user/signIn', signIn);

export default router;
