import {ORM} from 'redux-orm';
import Todo from '../models/todo';

const orm = new ORM({
  stateSelector: state => state.orm,
});

orm.register(Todo);

const session = orm.session();

export {orm, session};
