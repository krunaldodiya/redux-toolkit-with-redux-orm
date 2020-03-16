import Model, {attr} from 'redux-orm';

export default class Todo extends Model {
  toString() {
    return `Todo: ${this.name}`;
  }
}

Todo.modelName = 'Todo';

Todo.fields = {
  id: attr(),
  name: attr(),
  status: attr(),
};
