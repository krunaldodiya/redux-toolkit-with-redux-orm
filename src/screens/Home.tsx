import React, {memo, useState} from 'react';
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {v4} from 'uuid';
import {addTodo, removeTodo, toggleTodo} from '../store/reducers/todo';
import {orm} from '../orm';
import {store} from '../store';

const Home = (props: any) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const session = orm.mutableSession(store.getState().orm);

  const {todos} = useSelector(state => {
    return {
      todos: session.Todo.all().toRefArray(),
    };
  });

  return (
    <View style={{margin: 10}}>
      <View>
        <TextInput
          value={name}
          onChangeText={(data: any) => setName(data)}
          placeholder="add todo"
          style={{borderWidth: 1, marginBottom: 5, paddingLeft: 10}}
        />
        <Button
          title="add"
          onPress={() => {
            dispatch(addTodo({id: v4(), name, status: false}, session));
            setName('');
          }}
        />
      </View>

      <View style={{marginTop: 10}}>
        <FlatList
          data={todos}
          keyExtractor={(item, index) => index.toString()}
          keyboardShouldPersistTaps="handled"
          renderItem={({item}) => {
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
                      textDecorationLine: item.status ? 'line-through' : 'none',
                      color: item.status ? 'gray' : 'green',
                      textTransform: 'uppercase',
                    }}>
                    {item.name}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <TouchableOpacity
                    style={{marginHorizontal: 10}}
                    onPress={() => {
                      dispatch(toggleTodo(item, session));
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
                      dispatch(removeTodo(item, session));
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
          }}
        />
      </View>
    </View>
  );
};

export default memo(Home);
