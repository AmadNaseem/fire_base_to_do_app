import * as admin from 'firebase-admin';

const db = admin.firestore();

export interface TodoData {
  id?: string;
  title: string;
  completed: boolean;
}

export const createTodoData = async (todo: Omit<TodoData, 'id'>): Promise<TodoData> => {
  const docRef = await db.collection('todos').add(todo);
  const newTodo = (await docRef.get()).data() as TodoData;
  return { id: docRef.id, ...newTodo };
};

export const getTodosData = async (): Promise<TodoData[]> => {
  const snapshot = await db.collection('todos').get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as TodoData),
  }));
};

export const updateTodoData = async (id: string, todo: Omit<TodoData, 'id'>): Promise<TodoData> => {
  const todoRef = db.collection('todos').doc(id);
  await todoRef.update(todo);
  const updatedTodo = (await todoRef.get()).data() as TodoData;
  return { id, ...updatedTodo };
};

export const deleteTodoData = async (id: string): Promise<void> => {
  await db.collection('todos').doc(id).delete();
};
