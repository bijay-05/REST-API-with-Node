import { Router } from 'express';

import * as todoController from '../controllers/todoControllers.js';

const router = Router();

router.get('/', todoController.getAllTodosc);
router.get('/:id', todoController.getTodoByIdc);
router.post('/', todoController.createTodoc);
router.put('/:id', todoController.editTodoc);
router.delete('/:id', todoController.deleteTodoc);

export default router;