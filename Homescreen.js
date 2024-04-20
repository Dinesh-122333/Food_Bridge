import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Button, TouchableHighlight, TouchableOpacity } from 'react-native-web';

export default function HomeScreen({ route, navigation }) {
    const { location } = route.params;
    const { name } = route.params;

    const handlePress = () => {
      navigation.navigate('Enterdetials', {name: name });
    }
  
    // Split the address string at the comma and take the first part
    const addressParts = location.split(',');
    const formattedLocation = addressParts[0].trim();
  
    // Truncate the full location string to a certain length
    const maxLength = 45; // Define the maximum length you want to display
    const truncatedLocation = location.length > maxLength ? location.substring(0, maxLength) + '...' : location;
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.currentContainer}>
          <Image source={require("./assets/arrow.png")} style={styles.locationImage} />
          <Text style={styles.userLocation}>{formattedLocation}</Text>
        </View>
        <Image source={require("./assets/account.png")} style = {styles.usericon}/>
        <Text style={styles.userfullLocation}>{truncatedLocation}</Text>
        <View style={styles.line} />
        <View>
            <Text style = {styles.headder}>Hey <Text style={styles.name}>{name}</Text></Text>
            <Text style = {styles.description}>Begin with a donation and let the goodness spread</Text>
            <View>
              <Image source={require("./assets/primaryimage.png")} style = {styles.primaryimg}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Image source={require("./assets/plus.png")} style={styles.plus}/>
            <Text style={styles.buttontext}>Add to Donation</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.liteline} />
        <View style={styles.iconcontainer}>
            <Image source={require("./assets/homepage.png")} style = {styles.homeicon}/>
            <Image source={require("./assets/donateplus.png")} style = {styles.donateplusicon}/>
            <Image source={require("./assets/message.png")} style = {styles.messageicon}/>
        </View>
        <View style={styles.icontextcontainer}>
          <Text style = {styles.home}>Home</Text>
          <Text style = {styles.donateplus}>Donate</Text>
          <Text style = {styles.chat}>Chat</Text>
        </View>

      </SafeAreaView>
    );
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 30,
        backgroundColor:"white",
    },
    currentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 10,
        position:"absolute"
      },
      locationImage: {
        width: 20,
        height: 20,
        marginRight: 10,
      },
      userLocation: {
        fontSize:20,
        fontWeight:"500",
        marginBottom: 20,
        marginTop: 15,
      },
      userfullLocation:{
        color:"#707072",
        marginTop:50
      },
      usericon:{
        width:24,
        height:24,
        marginTop:45,
        marginLeft:340,
        position:"absolute"
      },
      line: {
        marginTop:20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#000000',
        marginBottom: 20,
      },
      headder:{
        fontSize:20,
        fontWeight:"500",
      },
      name:{
        color:"#3468C0",
      },
      description:{
        paddingTop:10,
        fontSize:14,
        color:"#5A5959",
      },
      button:{
        padding:30,
        color:"white",
        backgroundColor:"#3468C0",
        borderRadius:50,
        marginTop:120,
        marginLeft:50,
        marginRight:50,
      },
      buttontext:{
        color:"white",
        marginLeft:60,
        fontSize:14,
        fontWeight:"500",
        shadowColor:"#000000"
      },
      plus:{
        height:24,
        width:24,
        marginTop:30,
        marginLeft:30,
        position:"absolute"
      },
    
      primaryimg:{
        height: 264,
        width: 264,
        marginTop:40,
        // marginBottom:20,
        alignSelf: "center",
      },
      liteline: {
        marginTop:30,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        marginBottom: 10,
      },
      iconcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Distribute items evenly along the main axis
        alignItems: 'center', // Center items along the cross axis
        paddingHorizontal: 30, // Adjust padding as needed
        height: 50, // Adjust height as needed
        // position:"absolute"
      },
      homeicon: {
        height: 24,
        width: 24,
      },
      donateplusicon: {
        height: 24,
        width: 24,
      },
      messageicon: {
        height: 24,
        width: 24,
      },
      icontextcontainer:{
        fontSize:14,
        fontWeight:"500",
      },
      home:{
        paddingLeft:23,
        position:"absolute"
      },
      donateplus:{
        marginLeft:155,
        position:"absolute"
      },
      chat:{
        marginLeft:297,
      }

});
