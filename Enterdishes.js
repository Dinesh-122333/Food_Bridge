import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput,TouchableOpacity } from 'react-native';


export default function Enterdishes(){
    return(
        <>
        <SafeAreaView style={styles.container}>
            <View style={styles.upper}>
                <View style={styles.header}>
                    <Image source={require("./assets/keyboard_backspace.png")} style={styles.back} />
                    <Text style={styles.title}>Enter Details</Text>
                </View>
                <View style={styles.line} />
                <Image source={require("./assets/progress_bar.png")} style={styles.progressBar} />
                <View style={styles.progressDetails}>
                    <Text style={styles.primaryDetails}>Primary Details</Text>
                    <Text style={styles.dishes}>Name of Dishes</Text>
                    <Text style={styles.publish}>Publish</Text>
                </View>
            </View>
        </SafeAreaView>
        </>
    )
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
})