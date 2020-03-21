import Model, {attr} from 'redux-orm';

export default class Todo extends Model {
  static modelName = 'Todo';

  static fields = {
    id: attr(),
    name: attr(),
    status: attr(),
  };
}
