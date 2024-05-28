import knex from '../db/knex';

class TodoModel {
  tableName = 'todolist';

  async findAll() {
    return await knex.select().from(this.tableName);
  }

  async findById(id) {
    return await knex.select().from(this.tableName).where({ id }).first();
  }

  async create(todo) {
    const [createdTodo] = await knex(this.tableName).insert(todo).returning('*');
    return createdTodo;
  }

  async update(id, todo) {
    await knex(this.tableName).where({ id }).update(todo);
  }

  async delete(id) {
    await knex(this.tableName).where({ id }).del();
  }
}

export default new TodoModel();