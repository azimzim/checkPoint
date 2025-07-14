import { Router } from 'express';
import { getHelloMessage } from '../controllers/hello';

const router = Router();

router.get('/hello', getHelloMessage);

export default router;
