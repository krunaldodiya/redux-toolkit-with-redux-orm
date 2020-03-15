import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {v4} from 'uuid';
import userSlice from '../store/user';
import {useDispatch} from 'react-redux';

const Home = (props: any) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={(data: any) => setName(data)}
        placeholder="add name"
        style={{borderWidth: 1}}
      />

      <Button
        title="change"
        onPress={() => {
          dispatch(userSlice.actions.add({id: v4(), name}));
          setName('');
        }}
      />
    </View>
  );
};

export default Home;
