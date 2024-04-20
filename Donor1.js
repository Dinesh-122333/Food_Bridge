import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function Donor1({ navigation, route }) {
  const { name } = route.params;
  const [locate, setLocate] = useState('');

  const handleDonorPress = () => {
    // Handle Donor button press
    navigation.navigate('Homescreen', { location: locate , name: name });
  };

  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.title}>Enter your location</Text>
=======
      <Text style={styles.title}>Enter Your Location</Text>
>>>>>>> f9c5ceab67b64747e04ea8a82b5f5916b9fddac3
      <View style={styles.inputContainer}>
        <Image
          source={require('./assets/search.png')}
          style={styles.placeholderImage}
        />
        <TextInput
          placeholder="Try GKM palace, etc"
          style={styles.input}
          value={locate}
          onChangeText={(text) => setLocate(text)}
          placeholderTextColor="#969698"
        />
      </View>
      <View style={styles.currentContainer}>
        <Image source={require("./assets/arrow.png")} style={styles.locationImage}/>
        <TouchableOpacity onPress={handleDonorPress}>
          <Text style={styles.userLocation}>Use my current location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: 'white',
  },
  title: {
    color: "#000000",
    fontWeight: "500",
    paddingBottom: 30,
    marginTop:5,
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ADABAB',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  placeholderImage: {
    width: 20,
    height: 20,
<<<<<<< HEAD
    marginRight: 0,
=======
    marginRight: 10,
>>>>>>> f9c5ceab67b64747e04ea8a82b5f5916b9fddac3
  },
  input: {
    flex: 1,
    height: 40,
    color: '#969698',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  currentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 0,
  },
  locationImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  userLocation: {
    color: '#3468C0',
    marginBottom: 20,
    marginTop: 18,
    fontSize:16,
  },
  line: {
    borderBottomWidth: 1.2,
    borderBottomColor: 'rgba(0, 0, 0, 0.20)',
    marginBottom: 20,
  },
});