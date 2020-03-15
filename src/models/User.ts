import {fk, Model} from 'redux-orm';

export default class User extends Model {
  static modelName = 'User';

  static fields = {
    authorId: fk({
      to: 'Author',
      as: 'author',
      relatedName: 'books',
    }),
  };
}
