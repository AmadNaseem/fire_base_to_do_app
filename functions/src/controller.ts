import * as express from 'express';
import * as appService from './service';

const router = express.Router();

router.post('/', async (req, res) => {
  const { title, completed } = req.body;
  try {
    const newData = await appService.createTodoData({ title, completed });
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const alldata = await appService.getTodosData();
    res.status(200).json(alldata);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedData = await appService.updateTodoData(id, { title, completed });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await appService.deleteTodoData(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
