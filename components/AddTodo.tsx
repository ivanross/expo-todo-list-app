import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native'

interface Props {
  onSubmit: (text: string) => void
}

export const AddTodo: React.FunctionComponent<Props> = ({ onSubmit }) => {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    if (text.length > 3) {
      onSubmit(text)
      setText('')
    } else {
      Alert.alert('OOPS', 'todo mus be over 3 chars long', [])
    }
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="add todo..."
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
      />
      <View style={styles.submit}>
        <Button title="ADD TODO" onPress={handleSubmit} color="white" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  submit: {
    backgroundColor: 'coral',
    color: 'white',
    borderRadius: 30,
  },
})
