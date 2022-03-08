import { Router } from 'express';
import { CreateCategoryController } from '../modules/cars/useCases/createCategories/CreateCategoriesController';

const categoreisRoutes = Router();

const createCategoriesController = new CreateCategoryController();
categoreisRoutes.post('/', createCategoriesController.handle);

export { categoreisRoutes };
