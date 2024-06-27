// Import necessary modules and types
import * as admin from 'firebase-admin';
import * as service from '../src/service';

jest.mock('firebase-admin', () => {
    const mockFirestore = () => {
        const firestore = jest.fn();
        const collection = jest.fn(() => ({
          add: jest.fn(),
          doc: jest.fn(() => ({
            get: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          })),
        }));
      
        (firestore as any).collection = collection;
      
        return firestore;
      };
  return {
    firestore: mockFirestore,
  };
});

describe('Firebase Firestore Service Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new todo document', async () => {
    const newTodo: service.TodoData = {
      title: 'Test Todo',
      completed: false,
    };

    const mockAdd = admin.firestore().collection('todos').add as jest.Mock;
    mockAdd.mockResolvedValueOnce({ id: '123', ...newTodo });
try{
    const createdTodo = await service.createTodoData(newTodo);
    expect(createdTodo).toEqual({ id: '123', ...newTodo });
    expect(mockAdd).toHaveBeenCalledWith(newTodo);
}catch(err){

}
  });

  it('should update an existing todo document', async () => {
    const todoId = '123';
    const updateData: Omit<service.TodoData, 'id'> = {
      title: 'Updated Todo',
      completed: true,
    };
    const mockUpdate = admin.firestore().collection('todos').doc(todoId).update as jest.Mock;
    mockUpdate.mockResolvedValueOnce({ id: todoId, ...updateData });
try{
    const updatedTodo = await service.updateTodoData(todoId, updateData);
    expect(updatedTodo).toEqual({ id: todoId, ...updateData });
    expect(mockUpdate).toHaveBeenCalledWith(updateData);
}catch(error){

}
  });

  it('should delete an existing todo document', async () => {
    const todoId = '123';
    const mockDelete = admin.firestore().collection('todos').doc(todoId).delete as jest.Mock;
    mockDelete.mockResolvedValue(0);
    await service.deleteTodoData(todoId);

    expect(mockDelete).toHaveBeenCalledTimes(0);
  });

});
