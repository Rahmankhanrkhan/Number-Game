import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';



const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title} > Start Game screen!! </Text>
            <Text> Select a Number! </Text>

            <Card style={styles.inputContainer}>
                <Input 
                keyboardType = 'number-pad'
                style = {styles.input}  />
                <View style={styles.buttonContainer} >
                    <Button color='#c74657' title='Reset' onPress={() => { }} />
                    <Button color='#4ecf71' title='Confirm' onPress={() => { }} />
                </View>
            </Card>
        </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',

    },
    input : {
        width : 100,
        textAlign : 'center'
    }

});

export default StartGameScreen;