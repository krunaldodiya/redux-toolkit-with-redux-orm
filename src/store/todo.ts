import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {session} from '../orm';
import {Todo as TodoType} from '../types/todo';

const {Todo} = session;

interface InitialState {
  loading: boolean;
}

const initialState: InitialState = {
  loading: false,
};

export default createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, {payload}: PayloadAction<TodoType[]>) => {
      Todo.create(payload);
    },

    remove: (state, {payload}: PayloadAction<TodoType>) => {
      Todo.withId(payload.id).delete();
    },

    toggle: (state, {payload}: PayloadAction<TodoType>) => {
      Todo.withId(payload.id).update({status: !payload.status});
    },
  },
});
