import { Router } from 'express';
import createUsersController from '../controllers/createUsersController.mjs';

function createUsesRoute() {
  const router = Router();
  const controller = createUsersController();

  router.delete('/', async (req, res) => {
    const data = await controller.delete(req, res);
    res.send(data);
  });

  router.get('/', async (req, res) => {
    const data = await controller.get(req, res);
    res.send(data);
  });

  router.patch('/', async (req, res) => {
    const data = controller.patch(req, res);
    res.send(data);
  });

  router.post('/', async (req, res) => {
    const data = controller.post(req, res);
    res.send(data);
  });

  router.put('/', async (req, res) => {
    const data = controller.put(req, res);
    res.send(data);
  });

  return router;
}

export default createUsesRoute;
