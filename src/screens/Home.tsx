import React, {lazy, memo, Suspense, useCallback, useState} from 'react';
import {Button, FlatList, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {v4} from 'uuid';
import {createTodoSelector} from '../selectors/todo';
import {addTodo} from '../store/actions/todo';

const TodoItem = lazy(() => import('../components/TodoItem'));

const Home = (props: any) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const {todos} = useSelector(state => {
    return {
      todos: createTodoSelector(state),
    };
  });

  const handleAddTodo = useCallback(() => {
    dispatch(addTodo({id: v4(), name, status: false}));
    setName('');
  }, [dispatch, name]);

  return (
    <View style={{margin: 10}}>
      <View>
        <TextInput
          value={name}
          onChangeText={(data: any) => setName(data)}
          placeholder="add todo"
          style={{borderWidth: 1, marginBottom: 5, paddingLeft: 10}}
        />
        <Button title="add" onPress={handleAddTodo} />
      </View>

      <View style={{marginTop: 10}}>
        <FlatList
          data={todos}
          keyExtractor={(item, index) => index.toString()}
          keyboardShouldPersistTaps="handled"
          renderItem={({item}) => (
            <Suspense fallback={null}>
              <TodoItem todo={item} />
            </Suspense>
          )}
        />
      </View>
    </View>
  );
};

export default memo(Home);
