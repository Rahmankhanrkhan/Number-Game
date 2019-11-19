import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NumberContainer = props => {
    return (
        <View style = {styles.container} >
            <Text  style = {{fontSize : 30, color : '#86808a' }}> {props.children} </Text>
            
        </View>
    );
};
   
const styles = StyleSheet.create({
    container : {
        borderColor : '#eb5ef2' ,
        alignItems : 'center',
        marginVertical : 10,
        
        borderWidth : 2,
        borderColor : 'red' ,
        padding     : 10,
        borderRadius : 10,
        justifyContent : 'center',


    },
    
});

export default NumberContainer;