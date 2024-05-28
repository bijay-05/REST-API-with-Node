import * as todoService from '../services/todoServices.js';


export const getAllTodosc = async (req, res, next) => {
  try {
    const { todos, message } = await todoService.getAllTodos();
    res.json({ todos, message });
  } catch (error) {
    next(error);
  }
};

export const createTodoc = async (req, res, next) => {
  const todo = req.body;
  try {
    const { todo: createdTodo, message } = await todoService.createTodo(todo);
    res.status(201).json({ todo: createdTodo, message });
  } catch (error) {
    next(error);
  }
};

export const getTodoByIdc = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const { todo, message } = await todoService.getTodoById(id);
    if (todo) {
      res.json({ todo, message });
    } else {
      res.status(404).json({ message });
    }
  } catch (error) {
    next(error);
  }
};

export const editTodoc = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const updatedTodo = req.body;
  try {
    const message = await todoService.editTodo(id, updatedTodo);
    res.json({ message });
  } catch (error) {
    next(error);
  }
};


export const deleteTodoc = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const message = await todoService.deleteTodo(id);
    res.json({ message });
  } catch (error) {
    next(error);
  }
};