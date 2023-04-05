import React from 'react';
import { View, Text } from 'native-base';
import {StyleSheet} from "react-native"
import {  useRoute } from "@react-navigation/native";
import { List } from '../data/types/List';

const ItemDetails = () => {
    const { params } = useRoute();
    const { name } = params as List
    return (
        <View style = {style.container}>
            <Text style = {style.fontStyle}>{name}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      margin: 16,
    },
    fontStyle: {
      fontSize: 80,
      fontWeight: 'bold',
      color: "#000"
    }
  })

export default ItemDetails;