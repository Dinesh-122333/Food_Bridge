import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


export default function Update({route, navigation}){
    const { location, name, number, values, dishes, selectedCategory, selectedMealType } = route.params;

    const handleConfirm = () => {
        navigation.navigate('Success', { name: name, location: location, number: number, values: values, dishes: dishes });
    }
    

    return(
        <>
        <Text>Enter Details</Text>
        </>
    )

}