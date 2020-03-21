import {createReducer, ORM} from 'redux-orm';
import Todo from '../models/todo';

const orm = new ORM({
  stateSelector: state => state.orm,
});

orm.register(Todo);

const ormReducer = createReducer(orm);

export {orm, ormReducer};
