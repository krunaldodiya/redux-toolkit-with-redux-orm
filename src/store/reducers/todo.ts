import {LOAD_TODO} from '../actions/todo';

const initialState = {
  loading: false,
  loaded: false,
};

export default (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case LOAD_TODO: {
      return {...state, loading: true, loaded: false};
    }

    default: {
      return state;
    }
  }
};
