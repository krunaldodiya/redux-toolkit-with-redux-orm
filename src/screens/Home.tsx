import React, {useState} from 'react';
import {
  Button,
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {v4} from 'uuid';
import todoSlice from '../store/todo';
import {session} from '../orm';

const Home = (props: any) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const {todos} = useSelector(state => {
    return {
      todos: session.Todo.orderBy('id', 'desc')
        .all()
        .toModelArray(),
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
            dispatch(todoSlice.actions.add({id: v4(), name, status: false}));
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
                      dispatch(todoSlice.actions.toggle(item));
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
                      dispatch(todoSlice.actions.remove(item));
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

export default Home;
