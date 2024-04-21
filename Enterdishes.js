import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function Enterdishes({ route, navigation }) {

    const { name } = route.params;
    const [dishes, setDishes] = useState([]);
    const [newDish, setNewDish] = useState('');

    const handleDishes = () => {
        navigation.navigate('Confimation', {name: name });
      }
    const handleAddDish = () => {
        if (newDish.trim() !== '') {
            setDishes([...dishes, newDish.trim()]);
            setNewDish('');
        }
    };

    const handleDeleteDish = (index) => {
        const updatedDishes = [...dishes];
        updatedDishes.splice(index, 1);
        setDishes(updatedDishes);
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.upper}>
                    <View style={styles.header}>
                        <Image source={require("./assets/keyboard_backspace.png")} style={styles.back} />
                        <Text style={styles.title}>Enter Details</Text>
                    </View>
                    <View style={styles.line} />
                    <Image source={require("./assets/progress_bar2.png")} style={styles.progressBar} />
                    <View style={styles.progressDetails}>
                        <Text style={styles.primaryDetails}>Primary Details</Text>
                        <Text style={styles.dishes}>Name of Dishes</Text>
                        <Text style={styles.publish}>Publish</Text>
                    </View>
                </View>
                <View style={styles.textbox}>
                    <Image source={require("./assets/search1.png")} style={styles.searchImg} />
                    <TextInput
                        placeholder='Try Idly'
                        style={styles.searchInput}
                        value={newDish}
                        onChangeText={setNewDish}
                        onSubmitEditing={handleAddDish}
                    />
                </View>

                <View style={styles.dishesContainer}>
                    <Text style={styles.dishesHeader}>Your Dishes</Text>
                    {dishes.map((dish, index) => (
                        <View key={index} style={styles.dishItem}>
                            <Text style={styles.dishText}>{dish}</Text>
                            <TouchableOpacity onPress={() => handleDeleteDish(index)}>
                                <Image source={require("./assets/delete.png")} style={styles.deleteIcon} />
                            </TouchableOpacity>
                        </View>
                    ))}

                </View>
            <View>
            <TouchableOpacity style = {styles.next} onPress={handleDishes}>

                    <Text style = {styles.textNext}>Next</Text>
                    <Image source={require("./assets/next.png")} style={styles.nextImg}/>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        </>
    );
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
        marginTop: 10
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
    textbox: {
        marginTop: 24,
        padding: 12,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchInput: {
        marginLeft: 8,
        flex: 1
    },
    dishesContainer: {
        marginTop: 36,
    },
    dishesHeader: {
        fontSize: 18,
        fontWeight: "500",
    },
    dishItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16
    },
    dishText: {
        fontSize: 16,
        marginRight: 8
    },
    deleteIcon: {
        height: 20,
        width: 20
    },
    next:{
        marginTop:100,
        paddingRight:25,
        paddingLeft:30,
        paddingVertical:16,
        borderColor:"#1B8BF5",
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#1B8BF5"
    },
    textNext:{
        position:"absolute",
        fontSize:16,
        color:"#FFFFFF",
        alignSelf:"center",
        marginTop:16
    },
    nextImg:{
        marginLeft:165,
        marginTop:3
    }
});
