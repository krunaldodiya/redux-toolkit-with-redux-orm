import {Dispatch} from '@reduxjs/toolkit';
import axios from 'axios';
import todoSlice from '../store/todo';

export function loadCatgories() {
  return function(dispatch: Dispatch) {
    return axios
      .get('https://jsonplaceholder.typicode.com/user/1/posts')
      .then(response => response.data)
      .then(json => {
        dispatch(todoSlice.actions.add(json));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
