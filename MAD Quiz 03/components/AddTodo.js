import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a task..."
        placeholderTextColor="#888"
      />
      <Button
        title="Add"
        color="#6200EE"
        onPress={() => {
          if (text.trim()) {
            addTodo(text);
            setText('');
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
});

export default AddTodo;