import express from 'express';
const router = express.Router();
import { createUser } from "../controllers/user.controller"

router.post('/register',createUser);

export default router;