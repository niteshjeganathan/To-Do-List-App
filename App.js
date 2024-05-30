import { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [modelIsVisible, setModelIsVisible] = useState(false);
  const [tasks, setTasks] = useState([]);  

  function addTaskHandler(enteredTaskText) {
    setTasks((currentTasks) => [...currentTasks, {text: enteredTaskText, id: Math.random().toString()}]);
    endTaskAddHandler();
  };

  function deleteTaskHandler(id) {
    setTasks(currentTasks => {
      return currentTasks.filter((task) => task.id !== id);
    })
  }

  function startAddTaskHandler() {
    setModelIsVisible(true);
  }

  function endTaskAddHandler() {
    setModelIsVisible(false);
  }

  return (
    <View style = {styles.appContainer}>
      <Button title = "Add New Task" color = "#5e0acc" onPress={startAddTaskHandler}/>
      <TaskInput onAddTask = {addTaskHandler} visible = {modelIsVisible} closeModal = {endTaskAddHandler}/>
      <View style = {styles.tasksContainer }>
        <FlatList 
          data = {tasks} 
          renderItem = {(taskData) => {
            return(<TaskItem text = {taskData.item.text} onDeleteItem = {deleteTaskHandler} id = {taskData.item.id}/>);
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50, 
    paddingHorizontal: 15, 
    flex: 1, 
    backgroundColor: '#e4d0ff'
  }, 
  tasksContainer: {
    flex: 5
  }
});
