import Model, {attr} from 'redux-orm';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../store/actions/todo';

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
