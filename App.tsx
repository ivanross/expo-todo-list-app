import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Header } from './components/Header'
import { TodoItemUI } from './components/TodoItemUI'
import { AddTodo } from './components/AddTodo'

export type Todo = {
  title: string
  key: string
}

export default function App() {
  const [todos, setTodo] = useState<Todo[]>([
    { title: 'buy coffe', key: '1' },
    { title: 'create an app', key: '2' },
    { title: 'learn expo', key: '3' },
  ])

  const pressHandler = (key: string) => {
    setTodo(prevTodo => prevTodo.filter(todo => todo.key !== key))
  }

  const submitHandler = (title: string) => {
    setTodo(prevTodo => [
      { title, key: String(Math.max(...prevTodo.map(({ key }) => Number(key))) + 1) },
      ...prevTodo,
    ])
  }

  console.log(todos)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo onSubmit={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => <TodoItemUI item={item} onPress={pressHandler} />}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 40,
    // backgroundColor: 'yellow',
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: 'white',
  },
})
