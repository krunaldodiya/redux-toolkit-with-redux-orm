export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const initialState = {
  loading: false,
  loaded: false,
};

export default (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_TODO: {
      const {Todo} = payload.session;
      Todo.create({id: payload.id, name: payload.name});
      break;
    }

    case REMOVE_TODO: {
      const {Todo} = payload.session;
      Todo.withId(payload.id).delete();
      break;
    }

    case TOGGLE_TODO: {
      const {Todo} = payload.session;
      Todo.withId(payload.id).update({status: !payload.status});
      break;
    }

    default: {
      return state;
    }
  }
};

export const addTodo = (payload: any, session: any) => ({
  type: ADD_TODO,
  payload: {...payload, session},
});

export const removeTodo = (payload: any, session: any) => ({
  type: REMOVE_TODO,
  payload: {...payload, session},
});

export const toggleTodo = (payload: any, session: any) => ({
  type: TOGGLE_TODO,
  payload: {...payload, session},
});
