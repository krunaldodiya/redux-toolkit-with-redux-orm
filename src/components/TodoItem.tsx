import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeTodo, toggleTodo} from '../store/actions/todo';

const TodoItem = (props: any) => {
  const {todo} = props;
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        padding: 10,
        marginBottom: 5,
      }}>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textDecorationLine: todo.status ? 'line-through' : 'none',
            color: todo.status ? 'gray' : 'green',
            textTransform: 'uppercase',
          }}>
          {todo.name}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => {
            dispatch(toggleTodo(todo));
          }}>
          <Text
            style={{
              fontSize: 14,
              textTransform: 'uppercase',
              color: '#000',
            }}>
            toggle
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => {
            dispatch(removeTodo(todo));
          }}>
          <Text
            style={{
              fontSize: 14,
              textTransform: 'uppercase',
              color: '#fe0000',
            }}>
            remove
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(TodoItem);
