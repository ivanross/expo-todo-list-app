import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Todo } from '../App'

interface Props {
  item: Todo
  onPress: (key: string) => void
}

export const TodoItemUI: React.FunctionComponent<Props> = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item.key)}>
    <View style={styles.item}>
      <MaterialIcons name="delete" size={18} color="#333" />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },
})
