import express from 'express';
import {
  checkConection,
  surveyIndex,
  surveyStore,
  surveyUpdate,
  surveyDestroy,
} from '../controllers/surveyController.js';
import { authentication } from '../middlewares/auth.js';
const router = express.Router();
//_______inDevelopment
router.get('/checkConectionRoutes', authentication, (req, res) => {
  res.json({ mensaje: 'route survey conected' });
});
router.get('/checkConectionController', checkConection);
//_______finInDevelopment

router.get('/survey', surveyIndex);
router.post('/survey', surveyStore);
router.put('/survey/edit/:id', surveyUpdate);
router.delete('/survey/delete/:id', surveyDestroy);

export default router;
