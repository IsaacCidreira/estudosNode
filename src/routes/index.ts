import { Router } from 'express';
import { categoreisRoutes } from './categories.routes';

const router = Router();

router.use('/categories', categoreisRoutes);

export { router };
