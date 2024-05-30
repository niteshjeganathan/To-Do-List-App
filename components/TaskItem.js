import {StyleSheet, View, Text, Pressable} from 'react-native';

function TaskItem(props) {

    return(
        <Pressable onPress = {props.onDeleteItem.bind(this, props.id)} style = {({pressed}) => pressed && styles.pressedItem}>
            <View style = {styles.taskItemContainer}>
                <Text style = {styles.taskItem}>{props.text}</Text>
            </View>
        </Pressable>
    ); 
}

export default TaskItem;

const styles = StyleSheet.create({
    taskItem: {
        color: 'white'
    }, 
    taskItemContainer: {
        margin: 5, 
        backgroundColor: '#5e0acc', 
        padding: 10, 
        borderRadius: 10, 
        padding: 10
    }, 
    pressedItem: {
        opacity: 0.5
    }
})