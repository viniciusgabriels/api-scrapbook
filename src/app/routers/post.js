import { Router } from 'express';
import PostController from '../controllers/PostController';

const routes = new Router();

routes.get('/user/:userId/post', PostController.index);
routes.get('/user/:userId/post/:id', PostController.show);
routes.post('/user/:userId/post', PostController.store);
routes.put('/user/:userId/post/:id', PostController.update);
routes.delete('/user/:userId/post/:id', PostController.delete);

export default routes;
