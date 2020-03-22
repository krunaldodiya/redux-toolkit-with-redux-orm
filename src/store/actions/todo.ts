export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const LOAD_TODO = 'LOAD_TODO';
export const LOAD_TODO_SUCCESS = 'LOAD_TODO_SUCCESS';
export const LOAD_TODO_FAILED = 'LOAD_TODO_FAILED';

export const addTodo = (payload: any) => ({
  type: ADD_TODO,
  payload,
});

export const removeTodo = (payload: any) => ({
  type: REMOVE_TODO,
  payload,
});

export const toggleTodo = (payload: any) => ({
  type: TOGGLE_TODO,
  payload,
});

export const loadTodo = (payload: any) => ({
  type: LOAD_TODO,
  payload,
});

export const loadTodoSuccess = (payload: any) => ({
  type: LOAD_TODO_SUCCESS,
  payload,
});

export const loadTodoFailed = (payload: any) => ({
  type: LOAD_TODO_FAILED,
  payload,
});
