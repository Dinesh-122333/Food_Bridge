import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function Success({route, navigation}){
    const { location, name, number, values, dishes, selectedCategory, selectedMealType } = route.params;

    const handleDone = () => {
        navigation.navigate('Update', { name: name, location: location, number: number, values: values, dishes: dishes });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("./assets/success.png")} style={styles.successImg}/>
            <View style={styles.successDescriptionContainer}>
                <Text style={styles.successDescription}>
                    Thank you for posting your donation.{'\n'}
                    A suitable receiver will be in touch with you shortly.
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.next} onPress={handleDone}>
                    <Text style={styles.textNext}>Done</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
        backgroundColor: 'white',
    },
    successImg:{
        alignSelf: 'center',
        marginTop: 118,
    },
    successDescriptionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    successDescription: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    next: {
        marginTop: 330,
        paddingRight: 25,
        paddingLeft: 30,
        paddingVertical: 30,
        borderColor: '#1B8BF5',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#1B8BF5',
    },
    textNext: {
        position: 'absolute',
        fontSize: 16,
        color: '#FFFFFF',
        alignSelf: 'center',
        marginTop: 16,
    },
    nextImg: {
        marginLeft: 165,
        marginTop: 3,
    },
});
