'use strict';

import express from 'express';
const router = express.Router();

import memeRouter from './memes';
import trollRouter from './trolls';
import sessionsRouter from './sessions';
import usersRouter from './users';

router.use('/memes', memeRouter);
router.use('/trolls', trollRouter);
router.use('/sessions', sessionsRouter);
router.use('/users', usersRouter);

router.use((req, res) => {
  res.status(404).end();
});

export default router;
