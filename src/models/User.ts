import Model, {attr} from 'redux-orm';

export default class User extends Model {}

User.modelName = 'User';

User.fields = {
  id: attr(),
  name: attr(),
};
