import React from "react";
import { View, Image, Text } from "react-native";
import style from "./StoreCard.style";

const StoreCard = ({products}) => {
    const stokSit=[]
    console.log(products.inStock)
    if (products.inStock===false) {
        stokSit.push("STOKTA YOK") 
    }
    return(
        <View style={style.container}>
            <View style={style.cardContainer}>
                <View style={style.imageContainer}>
                    <Image style={style.image} source={{uri:products.imgURL}} />
                </View>
                <View style={style.innerContainer}>
                    <Text style={style.productName}> {products.title} </Text>
                    <Text style={style.productPrice}> {products.price} </Text>
                    <Text style={style.inStock}>{stokSit}</Text>
                    
                </View>
            </View>
        </View>
    )
}

export default StoreCard;