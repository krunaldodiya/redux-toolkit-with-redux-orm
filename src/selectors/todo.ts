import {createSelector} from 'redux-orm';
import {orm} from '../orm';

const invoke = createSelector(orm, ({Todo}) => Todo.all().toRefArray());

const createTodoSelector = state => invoke(state);

export {createTodoSelector};
