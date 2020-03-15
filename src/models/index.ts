import {createReducer, ORM} from 'redux-orm';
import User from './User';

const orm = new ORM();
orm.register(User);

export default createReducer(orm);
