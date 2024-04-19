import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

export default function Screen2({ route, navigation }) {
  const { name } = route.params;

  const handleDonorPress = () => {
    // Handle Donor button press
    navigation.navigate('Donor1'); 
  };
  
  const handleReceiverPress = () => {
    // Handle Receiver button press
    navigation.navigate('Receiver1'); 
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>Hey {name}</Text>
      <Text style={styles.descripi}>You are ________________ </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDonorPress}>
          <Text style={styles.buttonText}>Donor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReceiverPress}>
          <Text style={styles.buttonText}>Receiver</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <Text style={styles.quote}>A simple act of sharing food can have a profound impact on someone's life</Text>
      <Text style={styles.author}>John Doe</Text>
      <Image 
         // Replace 'path/to/your/image.jpg' with the actual path to your image
        style={styles.img}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  descripi: {
    color: '#374151',
    fontWeight: '500',
    marginTop: 20,
    fontSize: 20,
  },
  baseText: {
    color: 'dodgerblue',
    fontSize: 30,
    fontWeight: '700',
  },
  buttonContainer: {
    flexDirection: 'row', // Ensure buttons are displayed in the same row
    // justifyContent: 'center', // Center buttons horizontally
  },
  button: {
    backgroundColor: 'white',
    borderColor: '#3468C0',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
    marginVertical: 20,
    marginRight: 65, // Add some horizontal margin between buttons
  },
  buttonText: {
    color: '#3468C0',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  line: {
    borderBottomWidth: 1, // Add a 1px borderBottom
    borderBottomColor: '#000000', // Set the color of the borderBottom
    marginVertical: 20, 
    paddingHorizontal: 10,
  },
  quote: {
    marginLeft: 10,
  },
  author: {
    marginTop: 10,
    marginLeft: 250,
  },
  img: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    borderRadius: 10, // Add borderRadius as needed
    alignSelf: 'center', // Align image to the center horizontally
  },
});
