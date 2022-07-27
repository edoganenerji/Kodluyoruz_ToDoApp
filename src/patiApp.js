import React from "react";
import {View, Text, StyleSheet, Image, FlatList, Dimension, ScrollView, TextInput} from "react-native";
import productData from "./products.json"
import StoreCard from "./components/StoreCard"
const App = () => {
    const renderProducts = ({item}) => 
        <StoreCard products = {item} />
    return(
        <View style={style.container}>
            <Text style={style.header}>PATIKASTORE</Text>
            <TextInput 
                value={"Ara.."}
                style={style.input}
                />
            <FlatList
                style={style.flatContainer}
                keyExtractor={item => item.id.toString()}
                data = {productData}
                numColumns={2}
                renderItem={renderProducts}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"white"
    },
    flatContainer:{
        // margin:10
    },
    header:{
        fontSize:26,
        color:"purple"
    },
    input:{
        borderWidth:0.5,
        margin:5,
        borderRadius:10,
        backgroundColor:"#eceff1",
        color:"gray",
        fontSize:18,
    }
})

export default App;