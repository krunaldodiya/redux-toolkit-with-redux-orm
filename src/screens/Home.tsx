import React, {useState} from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {useSelector, useStore} from 'react-redux';
import {User} from '../types/user.type';

const Home = (props: any) => {
  const store: any = useStore();
  const {dispatch, select} = store;

  const rootState = useSelector(state => state);
  const authUser = select.auth.authUser(rootState);
  const usersById = select.user.usersById(rootState);

  const [task, setTask] = useState('');

  return (
    <View>
      <TextInput
        value={task}
        onChangeText={(data: any) => setTask(data)}
        placeholder="add name"
        style={{borderWidth: 1}}
      />

      <Button
        title="change"
        onPress={() => {
          dispatch.auth.setAuth(task);
          setTask('');
        }}
      />

      <View>
        {usersById.map((user: User, key: number) => {
          return (
            <View key={key}>
              <Text>{user?.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Home;
