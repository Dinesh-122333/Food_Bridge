import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function Confimation({route, navigation}){
    const { location, name, number, values, dishes, selectedCategory, selectedMealType } = route.params;

    const handleConfirm = () => {
        navigation.navigate('Success', { name: name, location: location, number: number, values: values, dishes: dishes });
    }
    

    return(
        <>
        <SafeAreaView style={styles.container}>
                <View style={styles.upper}>
                    <View style={styles.header}>
                        <Image source={require("./assets/keyboard_backspace.png")} style={styles.back} />
                        <Text style={styles.title}>Enter Details</Text>
                    </View>
                    <View style={styles.line} />
                    <Image source={require("./assets/progress_bar3.png")} style={styles.progressBar} />
                    <View style={styles.progressDetails}>
                        <Text style={styles.primaryDetails}>Primary Details</Text>
                        <Text style={styles.dishes}>Name of Dishes</Text>
                        <Text style={styles.publish}>Publish</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.donationTitle}>Confirm your donation</Text>
                    <View style={styles.donateContainer}>
                        <View style={styles.mainDetails}>
                            <Text><Image source={require("./assets/person.png")}/>{name} | {number}</Text>
                            <Text><Image source={require("./assets/location.png")}/>{location}</Text>
                        </View>
                        <View style={styles.liteLine}/>
                        <View style={styles.servingDetails}>
                            <Text style={styles.servingTitle}>{values} Servings</Text>
                            <Text style={styles.dishesTitle}>Dishes</Text>
                            <View style={styles.dishesContainer}>
                                
                                {chunkArray(dishes, 5).map((column, colIndex) => (
                                    <View key={colIndex} style={styles.column}>
                                        {column.map((dish, index) => (
                                            <View key={index} style={styles.dishRow}>
                                                <Image source={require("./assets/arrowright.png")} />
                                                <Text>{dish}</Text>
                                            </View>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        <View>
                            <Text>Food Category:</Text>
                            {selectedCategory && (
                                <View style={styles.categoryRow}>
                                    <Image
                                        source={
                                            selectedCategory === 'Veg'
                                                ? require('./assets/vegbutton.png')
                                                : selectedCategory === 'Non-Veg'
                                                ? require('./assets/Nonvegbutton.png')
                                                : selectedCategory === 'Both'
                                                ? require('./assets/bothbutton.png')
                                                : null // Add additional conditions as needed
                                        }
                                        style={styles.icon}
                                    />
                                    <Text style={styles.selectedCategory}>{selectedCategory}</Text>
                                </View>
                            )}
                            <Text>Meal Type:</Text>
                            {selectedMealType && (
                                <View style={styles.categoryRow}>
                                    <Image
                                        source={
                                            selectedMealType === 'Breakfast'
                                                ? require('./assets/breakfastbutton.png')
                                                : selectedMealType === 'Lunch'
                                                ? require('./assets/lunchbutton.png')
                                                : selectedMealType === 'Dinner'
                                                ? require('./assets/dinnerbutton.png')
                                                : null // Add additional conditions as needed
                                        }
                                        style={styles.icon}
                                    />
                                    <Text style={styles.selectedMealType}>{selectedMealType}</Text>
                                </View>
                            )}
                        </View>

                  </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.next} onPress={handleConfirm}>
                        <Text style={styles.textNext}>Publish</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
        backgroundColor: 'white',
    },
    upper: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingBottom: 20, // Adjust this value to control the distance from the bottom
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        marginTop: 8,
        marginLeft: 5,
        position: "absolute",
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 30
    },
    line: {
        marginTop: 17,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        marginBottom: 10,
    },
    progressBar: {
        alignSelf: "center",
        marginTop: 10,
        
    },
    progressDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingLeft: 25,
        paddingRight: 45,
    },
    primaryDetails: {
        fontSize: 10
    },
    dishes: {
        fontSize: 10,
        paddingRight: 20
    },
    publish: {
        fontSize: 10
    },
    donateContainer:{
        borderWidth:1,
        borderRadius:10, 
        paddingBottom:30,
        paddingTop:20
    },
    donationTitle:{
        fontSize:18,
        fontWeight:"500",
        marginBottom:10,
    },
    liteLine:{
        marginTop: 30,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.20)',
        borderStyle: 'dotted',
    },
    mainDetails:{
        paddingLeft:20
    },
    servingDetails:{
        paddingLeft:20
    },
    servingTitle:{
        fontSize:18,
        fontWeight:"500",
        marginBottom:10,
    },
    dishesTitle:{
        fontSize:18,
        fontWeight:"500",
        marginBottom:10,
    },
    dishesContainer: {
        flexDirection: 'row',
    },
    column: {
        flex: 1,
    },
    dishRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    next: {
        marginTop: 260,
        paddingRight: 25,
        paddingLeft: 30,
        paddingVertical: 30,
        borderColor: "#1B8BF5",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#1B8BF5"
    },
    textNext: {
        position: "absolute",
        fontSize: 16,
        color: "#FFFFFF",
        alignSelf: "center",
        marginTop: 16
    },
    nextImg: {
        marginLeft: 165,
        marginTop: 3
    }
    
});
