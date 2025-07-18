import express from 'express';
import { getUsers, createUser, deleteUser } from '../controllers/users';

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);

export default router;
