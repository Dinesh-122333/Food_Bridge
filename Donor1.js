import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function Donor1() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Enter Your Location</Text>
      <GooglePlacesAutocomplete
        placeholder="Try GKM palace, etc"
        onPress={(data, details = null) => {
          console.log(data.description); // This will log the selected location
        }}
        query={{
          key: 'AIzaSyDG0_JBvUKcyl3Nvl4U2DItZGb5wIIqFBo',
          language: 'en',
          types: 'establishment', // Limit results to establishments (places)
        }}
        styles={{
          textInput: styles.input,
        }} 
      />
      <Button title="Search" onPress={() => console.log('Search button pressed')} />
      <Text style={styles.userlocation}>Use my current location</Text>
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
  input: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  userlocation: {
    color: 'dodgerblue',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 20,
  },
});
