import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User as UserType} from '../types/user.type';

interface InitialState {
  loading: boolean;
  meta: object;
}

const initialState: InitialState = {
  loading: false,
  meta: {},
};

export default createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, {payload}: PayloadAction<UserType>) => {
      state.loading = true;
      state.meta = {name: 'krunal'};
    },
  },
});
