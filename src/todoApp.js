import React, {useEffect, useState} from "react";
import {View, FlatList, Text, StyleSheet} from "react-native";
import ToDoCard from "./components/ToDoCard";
import SaveTodoCard from "./components/SaveTodoCard";
const App = () => {
        const [newTask, setnewTask] = useState("");

        const [todo_list, settodo_list] = useState([]);

        const [completedTask, setcompletedTask] = useState([])
        
        const renderToDoCard = ({item})=> 
        <ToDoCard task={item.task} isCompleted={item.isCompleted} onPress={()=>onPress(item)}
        onLongPress={()=>onLongPress(item)}
        />
        
        const onPress = item => {
            const new_todo_list = todo_list.map(task => task.id === item.id ? {...task,isCompleted:!task.isCompleted}:task)
            settodo_list(new_todo_list)
            console.log(todo_list)
        }
        const onLongPress = item => {
            const new_todo_list = todo_list.filter(task => task.id !== item.id && task)
            settodo_list(new_todo_list)
            console.log(todo_list)
        }
        
        useEffect(()=>{
            const completedList = todo_list.filter(todo=>todo.isCompleted===true)
            setcompletedTask(completedList)
        },[todo_list])
        
        const counter = () => {
            return(
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Yapılacaklar</Text>
                    <Text style={styles.headerCounter}>{todo_list.length-completedTask.length}</Text>
                </View>
            )
        }

        
        const grabText = text => {
            setnewTask(text)
        }  
        
        const saveText = () => {
            if (newTask === "") return alert ("Please enter a task!")
            // Create new todo list
            settodo_list([...todo_list,{"id":todo_list.length.toString(), "task": newTask, "isCompleted":false}])
            // In order to return place holder
            grabText("")
        }
        
        return(
            <View style={styles.container}>
            <FlatList
            ListHeaderComponent={counter}
            keyExtractor={item=>item.id}
            data={todo_list}
            renderItem={renderToDoCard}
            />
            <SaveTodoCard value={newTask} onChange={grabText}  onButtonPress={saveText}/>
            
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#2f4f4f",
        flex:1
    },
    headerContainer:{
        padding:8,
        flexDirection:"row"
    },
    headerText:{
        color:"#b8860b",
        fontSize:30,
        flex:1
    },
    headerCounter:{
        color:"#b8860b",
        fontSize:30,

    }
})