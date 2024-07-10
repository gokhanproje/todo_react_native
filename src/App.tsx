import Entypo from '@react-native-vector-icons/entypo';
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import TaskButton from "./components/TaskButton";


interface TaskWithID {
  id: number;
  name: string;
  done: boolean;
}

const App: React.FC = () => {
  const [taskList, setTaskList] = useState<TaskWithID[]>([
    { id: 1, name: 'Köpeği gezdir', done: false },
    { id: 2, name: 'Çiçekleri sula', done: true },
    { id: 3, name: 'Süt al', done: false },
  ]);

  const [newTaskName, setNewTaskName] = useState('');

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = taskList.map(task => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  const removeTask = (taskId: number) => {
    const updatedTasks = taskList.filter(task => task.id !== taskId);
    setTaskList(updatedTasks);
  };

  const addTask = (taskName: string) => {
    if (taskName.trim().length === 0) return;

    const newTask: TaskWithID = {
      id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 1,
      name: taskName,
      done: false,
    };

    setTaskList([...taskList, newTask]);
    setNewTaskName('');
  };

  const renderTaskItem = ({ item }: { item: TaskWithID }) => (
    <TaskButton
      name={item.name}
      done={item.done}
      onPress={() => toggleTaskCompletion(item.id)}
      onRemoval={() => removeTask(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        ListHeaderComponent={
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.titleText}>Yapılacaklar</Text>
            <Text style={styles.titleText}>{taskList.filter(task => !task.done).length}</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.container}>
            <Text style={styles.secondaryTitleText}>Görev Ekle</Text>
            <View style={styles.textInputContainer}>
              <TextInput 
                value={newTaskName}
                onChangeText={setNewTaskName}
                style={{color: "white"}}
                placeholderTextColor="gray"
                placeholder="Görev İsmi"
              />
              <TouchableOpacity onPress={() => addTask(newTaskName)} style={styles.addButtonContainer}>
                <Entypo name="plus" color="white" size={30}/>
              </TouchableOpacity>
            </View>
          </View>
        }
        ListFooterComponentStyle={{flex:1, justifyContent: 'flex-end'}}
        contentContainerStyle={{flexGrow: 1}}
        data={taskList}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#121111"
  },
  titleText: {
    fontSize: 36,
    margin: 16,
    color: "white",
    fontWeight: "900",
  },
  secondaryTitleText: {
    fontSize: 24,
    color: "white",
    fontWeight: "900",
  },
  container: {
    margin: 12,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#3A3535",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textInputContainer: {
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'space-between',
    flexDirection:"row",
    marginTop: 12,
    marginBottom: 12,
    borderRadius:16,
    backgroundColor: "#111111",
  },
  addButtonContainer: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection:"row",
    marginTop: 12,
    marginBottom: 12,
    borderRadius:16,
    backgroundColor: "#222222",
  }
});

export default App;
