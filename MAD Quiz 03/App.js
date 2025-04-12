import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => (
  <TodoProvider>
    <View style={styles.container}>
      <Text style={styles.title}>TO DO APP - HOME - FA22-BSCS-0001</Text>
      <AddTodo />
      <TodoList />
    </View>
  </TodoProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8ECEF',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200EE',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default App;