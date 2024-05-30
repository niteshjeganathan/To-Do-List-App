import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';
import { useState } from 'react';

function TaskInput(props) {
    const  [enteredTaskText, setEnteredTastText] = useState('');

    function taskInputHandler(enteredText) {
        setEnteredTastText(enteredText);
    };

    function onTaskAdded() {
        props.onAddTask(enteredTaskText);
        setEnteredTastText('');
    }

    return(
        <Modal visible = {props.visible} animationType='slide'>
            <View style = {styles.inputContainer}>
                <TextInput style = {styles.textInput}  placeholder='Add a task!' onChangeText={taskInputHandler} value={enteredTaskText} placeholderTextColor='grey'/>
                <View style = {styles.buttonsContainer}>
                    <View style = {styles.button}>
                        <Button title = 'Add Task' onPress={onTaskAdded} color = '#b180f0'/>
                    </View>
                    <View style = {styles.button}>
                        <Button title = 'Cancel' onPress={props.closeModal} color = '#f31282'/>
                    </View> 
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderBottomWidth: 1, 
        borderBottomColor: '#cccccc', 
        padding: 20, 
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1, 
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%', 
        padding: 10, 
        borderRadius: 10,
        color: 'black', 
        padding: 20, 
        textAlign: 'center'
      }, 
      buttonsContainer: {
        flexDirection: 'row'
      }, 
      button: {
        width: '30%', 
        marginHorizontal: 10, 
        marginTop: 10
      }
})

export default TaskInput;