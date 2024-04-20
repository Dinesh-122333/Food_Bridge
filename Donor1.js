import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';

export default function Donor1({ navigation, route }) {
  const { name } = route.params;
  const [locate, setLocate] = useState('');

  const handleDonorPress = () => {
    // Handle Donor button press
    navigation.navigate('Homescreen', { location: locate , name: name });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enter Your Location</Text>
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
        />
      </View>
      <View style={styles.currentContainer}>
        <Image source={require("./assets/location-arrow.png")} style={styles.locationImage}/>
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
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  placeholderImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  currentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  locationImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  userLocation: {
    color: 'dodgerblue',
    textDecorationLine: 'underline',
    marginBottom: 20,
    marginTop: 15,
    fontSize:14,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 20,
  },
});
