import axios from 'axios';
import {addTodo} from '../store/types/todo';

export function loadCatgories() {
  return function(dispatch: any) {
    return axios
      .get('https://jsonplaceholder.typicode.com/user/1/posts')
      .then(response => response.data)
      .then(json => {
        dispatch(addTodo(json));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
