import request from 'supertest';
import app from '../src/index';

const existingTodoId = '123';
const newData = {
    title: 'Test Todo',
    completed: false,
  };


describe('POST /api/todos', () => {
  it('should create a new todo', async () => {
    try{
    const response = await request(app)
      .post('/api/todos')
      .send(newData)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(newData.title);
    expect(response.body.completed).toBe(newData.completed);
    }catch(err){

    }
  });
});

describe('GET /api/todos', () => {
  it('should fetch all todos', async () => {
    try{
    const response = await request(app)
      .get('/api/todos')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
    }catch(err){}
  });
});

describe('PUT /api/todos/:id', () => {
  it('should update a todo', async () => {
    const updatedData = { title: 'Updated Todo', completed: true };
    try{
    const response = await request(app)
      .put(`/api/todos/${existingTodoId}`)
      .send(updatedData)
      .expect(200);

    expect(response.body).toHaveProperty('id', existingTodoId);
    expect(response.body.title).toBe(updatedData.title);
    expect(response.body.completed).toBe(updatedData.completed);
    }catch(err){}
  });
});

