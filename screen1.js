import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Alert } from 'react-native';

export default function Screen1({ navigation }) {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handlePress = () => {

    if (name && mobileNumber && email) {
      // Navigate to the next screen
      navigation.navigate('Screen2', { name: name });
    } else {
      // Show alert if any input field is empty
      Alert.alert('Incomplete Details', 'Please fill in all the details');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>Welcome</Text>
      <Text style={styles.description}>Let’s get you started, Enter your details here</Text>
      <View style={styles.inner}>
        <Text style={styles.inputheader}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name here"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.inputheader}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your mobile number here"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="numeric"
        />
        <Text style={styles.inputheader}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address here"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <Button
      style = {styles.button}
        title="Get started"
        onPress={handlePress}
        disabled={!name || !mobileNumber || !email} // Disable button if any input field is empty
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  description: {
    color: '#374151',
    fontWeight: '500',
  },
  baseText: {
    color: 'dodgerblue',
    fontSize: 30,
    fontWeight: '700',
    paddingTop: 50,

  },
  inner: {
    paddingTop: 30,
  },
  input: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  inputheader: {
    paddingBottom: 10,
  },
  button:{
    marginTop:60,
    backgroundColor:"Dodgerblue"
  }
});
