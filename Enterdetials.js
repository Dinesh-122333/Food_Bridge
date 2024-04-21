import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput,TouchableOpacity } from 'react-native';


export default function EnterDetails({ route, navigation }) {
    const { name } = route.params;
    const [numberofServing, setnumberofServing] = useState('');
    const [selectedServings, setSelectedServings] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [selectedMealType, setSelectedMealType] = useState(null);

    const handleServingPress = (servings) => {
        setnumberofServing(servings);
        setSelectedServings(servings);
    };

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
    };

    const handleMealTypePress = (mealType) => {
        setSelectedMealType(mealType);
    };

    const handleDetials = () => {
        navigation.navigate('Enterdishes', {name: name });
      }

    const servingButtonStyle = (servings) => {
        return {
            paddingHorizontal: 25,
            paddingVertical: 5,
            borderColor: servings === selectedServings ? "#1B8BF5" : "#1B8BF5",
            borderWidth: 1,
            borderRadius: 8,
            backgroundColor: servings === selectedServings ? "#F0F9FF" : "#F0F9FF",
            marginRight: 20,
            color: servings === selectedServings ? "#1B8BF5" : "#1B8BF5",
            fontSize: 15
        };


    };
    const categoryButtonStyle = (category) => {
        const bgcolor = getCategoryColor(category);
        const color = getCategoryMainColor(category)
        return {
            paddingHorizontal: 30,
            paddingVertical: 6,
            borderWidth: 0.5,
            borderRadius: 8,
            backgroundColor: category === selectedCategory ? bgcolor : "white",
            borderColor:category === selectedCategory ? color : "#ADABAB", // Set border color to respective category color
            color: category === selectedCategory ? color : "white",
            marginRight: 20,
            color: getCategoryColor(category),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal:10,
        };
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case 'Veg':
                return '#DAFCEC';
            case 'Non-Veg':
                return '#FACBCF';
            case 'Both':
                return '#FFF2BE';
            default:
                return '#000000'; // Default color
        }
    };
    const getCategoryMainColor = (category) => {
        switch (category) {
            case 'Veg':
                return '#27933D';
            case 'Non-Veg':
                return '#7D0A0A';
            case 'Both':
                return '#D97706';
            default:
                return '#000000'; // Default color
        }
    };
    const renderCategoryButton = (category, iconSource) => {
        // Define styles for each category
        let categoryTextStyle = styles.categoryButtonText;
        if (category === 'Veg') {
          categoryTextStyle = [categoryTextStyle, styles.vegtext];
        } else if (category === 'Non-Veg') {
          categoryTextStyle = [categoryTextStyle, styles.nonvegtext];
        } else if (category === 'Both') {
          categoryTextStyle = [categoryTextStyle, styles.bothtext];
        }
      
        return (
          <TouchableOpacity onPress={() => handleCategoryPress(category)}>
            <View style={categoryButtonStyle(category)}>
              <Image source={iconSource} style={styles.categoryIcon} />
              <Text style={categoryTextStyle}>{category}</Text>
            </View>
          </TouchableOpacity>
        );
      };
      

    

    const mealButtonStyle = (mealType) => {
        return {
            paddingRight: 25,
            paddingLeft: 30,
            paddingVertical: 10,
            borderColor: "#1B8BF5",
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: mealType === selectedMealType ? "#1B8BF5" : "#F0F9FF",
            marginRight: 20,
            color: mealType === selectedMealType ? "#FFFFFF" : "#1B8BF5",
        };
    };

    const renderMealButton = (mealType, iconSource) => {
        return (
            <TouchableOpacity onPress={() => handleMealTypePress(mealType)}>
                <View style={mealButtonStyle(mealType)}>
                    <Image source={iconSource} style={styles.mealIcon} />
                    <Text style={styles.mealButtonText}>{mealType}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upper}>
                <View style={styles.header}>
                    <Image source={require("./assets/keyboard_backspace.png")} style={styles.back} />
                    <Text style={styles.title}>Enter Details</Text>
                    <Image source={require("./assets/info.png")} style={styles.info} />
                </View>
                <View style={styles.line} />
                <Image source={require("./assets/progress_bar.png")} style={styles.progressBar} />
                <View style={styles.progressDetails}>
                    <Text style={styles.primaryDetails}>Primary Details</Text>
                    <Text style={styles.dishes}>Name of Dishes</Text>
                    <Text style={styles.publish}>Publish</Text>
                </View>
            </View>
            <View style={styles.servingcontainer}>
                <Text style={styles.servingTitle}>Number of Servings</Text>
                <TextInput
                    placeholder='Try 50, 75 etc'
                    value={numberofServing}
                    onChangeText={(text) => setnumberofServing(text)}
                    keyboardType="numeric"
                    style={styles.serving}
                />
                <View style={styles.servingButtons}>
                    <TouchableOpacity onPress={() => handleServingPress("25")}>
                        <Text style={servingButtonStyle("25")}>25</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleServingPress("50")}>
                        <Text style={servingButtonStyle("50")}>50</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleServingPress("75")}>
                        <Text style={servingButtonStyle("75")}>75</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.categoryContainer}>
                <Text style={styles.category}>Food Category</Text>
                <View style={styles.categoryButtons}>
                    {renderCategoryButton('Veg', require('./assets/veg.png'))}
                    {renderCategoryButton('Non-Veg', require('./assets/nonveg.png'))}
                    {renderCategoryButton('Both', require('./assets/both.png'))}
                </View>
            </View>
            <View style={styles.mealcontainer}>
                <Text style={styles.mealTitle}>Meal Type</Text>
                <View style={styles.mealButtons}>
                    <TouchableOpacity onPress={() => handleMealTypePress("Breakfast")}>
                        <Text style={mealButtonStyle("Breakfast")}>Breakfast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMealTypePress("Lunch")}>
                        <Text style={mealButtonStyle("Lunch")}>Lunch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMealTypePress("Dinner")}>
                        <Text style={mealButtonStyle("Dinner")}>Dinner</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.additionalcontainer}>
            <Text style={styles.additionalTitle}>Additional Information 
            <Text style ={styles.innerText}>(optinal)</Text>
            </Text>
            <TextInput placeholder='type here...' style={styles.additionalDescription}/>
            </View>
            <View>
            <TouchableOpacity style = {styles.next} onPress={handleDetials}>

                    <Text style = {styles.textNext}>Next</Text>
                    <Image source={require("./assets/next.png")} style={styles.nextImg}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#FFFFFF',
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
        padding: 20,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        marginTop: 8,
        marginLeft: 15,
        position: "absolute",
        height:22,
        width: 22,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 30
    },
    info: {
        marginTop: 7,
        marginLeft: 205,
        height:20,
        width: 20,
    },
    line: {
        padding:0,
        marginTop: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ADABAB40',
        marginBottom: 10,
    },
    progressBar: {
        alignSelf: "center",
        marginTop: 10,
        height:22.5,
        width:280,
    },
    progressDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingLeft: 35,
        paddingRight: 50,
    },
    primaryDetails: {
        fontSize: 12,
    },
    dishes: {
        fontSize: 12,
        paddingRight: 20,
        color: '#ADABAB',
    },
    publish: {
        fontSize: 12,
        color: '#ADABAB',
    },
    servingcontainer:{
        paddingLeft: 20,
        paddingRight:20,
        marginTop:2,
    },
    servingTitle:{
        marginBottom:8,
        fontSize:18
    },
    serving:{
    padding: 10,
    borderColor: '#ADABAB',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 8,
    },
    servingButtons:{
        flexDirection: 'row',
        
               
    },
    twentyfive:{
        paddingHorizontal:30,
        paddingVertical:10,
        borderColor:"#1B8BF5",
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#F0F9FF",
        marginRight:20,
        color:"#1B8BF5",
        fontSize:12
    },
    fifty:{
        paddingHorizontal:30,
        paddingVertical:10,
        borderColor:"#1B8BF5",
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#F0F9FF",
        marginRight:20,
        color:"#1B8BF5",
        fontSize:12
    },
    seventyfive:{
        paddingHorizontal:30,
        paddingVertical:10,
        borderColor:"#1B8BF5",
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#F0F9FF",
        color:"#1B8BF5",
        fontSize:12
    },
    categoryContainer:{
        paddingLeft: 20,
        marginTop:30,
    },
    categoryIcon: {
        marginRight: 0, 
        height:20,
        width: 20,
    },
    categoryButtonText: {
        fontSize: 15,
        marginLeft: 5,// Add some margin between the icon and the text
    },
    category:{
        fontSize:18,
        marginBottom:8
    },
    categoryButtons:{
        marginTop:5,
        flexDirection: 'row',
        color:"#ADABAB"
    },
    veg:{
        paddingHorizontal:25,
        paddingVertical:10,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:"white",
        marginRight:20,
        color:"#ADABAB"
    },
    vegtext:{
        color:"#059669",
    },
    nonVeg:{
        paddingHorizontal:25,
        paddingVertical:10,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:"white",
        marginRight:20,
        
    },
    nonvegtext:{
        color:"#7D0A0A",
    },
    both:{
        paddingHorizontal:25,
        paddingVertical:10,
       
        borderWidth:1,
        borderRadius:10,
        backgroundColor:"white",
        
    },
    bothtext:{
        color:"#D97706",
    },
    Img:{
        position:"absolute",
        marginLeft:10,
        marginTop:12,   
    },
    mealcontainer:{
        paddingRight:20,
        paddingLeft: 20,
        marginTop:24,
    },
    mealTitle:{
        marginBottom:8,
        fontSize:18
    },
    mealButtons:{
        flexDirection: 'row',
        
               
    },
    Breakfast:{
        paddingRight:25,
        paddingLeft:30,
        paddingVertical:10,
        borderColor:"#1B8BF5",
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#F0F9FF",
        marginRight:20,
        
    },
    textBreakfast:{
        color:"#1B8BF5",
        fontSize:12,
        marginLeft:2,
    },
    Lunch:{
        paddingRight:25,
        paddingLeft:30,
        paddingVertical:10,
        borderColor:"#1B8BF5",
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#F0F9FF",
        marginRight:20,
        color:"#1B8BF5"
    },
    textLunch:{
        color:"#1B8BF5",
        fontSize:12
    },
    Dinner:{
        paddingRight:25,
        paddingLeft:30,
        paddingVertical:10,
        borderColor:"#1B8BF5",
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#F0F9FF",
        color:"#1B8BF5"
    },
    textDinner:{
        color:"#1B8BF5",
        fontSize:12
    },
    mealImg:{
        position:"absolute",
        marginLeft:8,
        marginTop:10,   
    },
    additionalcontainer:{
        paddingRight:20,
        paddingLeft:20,
    },
    additionalTitle:{
        marginTop:32,
        fontSize:18,
        marginBottom:8
    },
    innerText:{
        color:"#5A5959"
    },
    additionalDescription:{
        borderWidth:1,
        borderColor:"#5A5959",
        paddingTop:10,
        paddingLeft:20,
        paddingBottom:50,
        borderRadius:10,
    },
    next:{
        marginTop:30,
        marginLeft:20,
        marginRight:20,
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
