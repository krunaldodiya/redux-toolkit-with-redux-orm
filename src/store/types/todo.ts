export const ADD_TODO = 'ADD_TODO';

export const addTodo = (payload: any) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = (payload: any) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = (payload: any) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};
