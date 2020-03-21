import Model, {attr} from 'redux-orm';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export default class Todo extends Model {
  static modelName = 'Todo';

  static fields = {
    id: attr(),
    name: attr(),
    status: attr(),
  };

  static reducer(action, Todo, session) {
    const {type, payload} = action;

    switch (type) {
      case ADD_TODO: {
        Todo.create({id: payload.id, name: payload.name});
        break;
      }

      case REMOVE_TODO: {
        Todo.withId(payload.id).delete();
        break;
      }

      case TOGGLE_TODO: {
        Todo.withId(payload.id).update({status: !payload.status});
        break;
      }

      default: {
        return session.state;
      }
    }
  }
}

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
