import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todo}>
          <TouchableOpacity
            style={styles.textContainer}
            onPress={() => toggleTodo(todo.id)}
          >
            <Text
              style={[styles.text, todo.completed && styles.completed]}
            >
              {todo.text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteTodo(todo.id)}
            style={styles.deleteButton}
          >
            <Ionicons name="trash-outline" size={24} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    padding: 5,
  },
});

export default TodoList;