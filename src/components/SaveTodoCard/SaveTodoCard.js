import React from "react";
import { View, TextInput, Button, TouchableOpacity, Text } from "react-native";
import styles from "./SaveTodoCard.styles";

const SaveTodoCard = (props) => {
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.textInputBody}
                placeholder="ToDo..."
                placeholderTextColor={"white"}
                onChangeText={props.onChange}
                value={props.value}
            />
            <View style={styles.seperator}></View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={props.onButtonPress}
                style={styles.buttonBody}>
                    <Text style={styles.buttonText}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SaveTodoCard;