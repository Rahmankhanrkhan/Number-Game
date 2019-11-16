import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, KeyBoard } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const inputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };


    return (
        <TouchableWithoutFeedback onPress={() => { 
            KeyBoard.dismiss();
         }} >
            <View style={styles.screen}>
                <Text style={styles.title} > Start Game screen!! </Text>
                <Text> Type a Number! </Text>

                <Card style={styles.inputContainer}>
                    <Input
                        autoCapitalize='none'
                        autoCorrect={false}
                        maxLength={2}
                        keyboardType='number-pad'
                        style={styles.input}
                        onChangeText={inputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer} >
                        <Button color='#c74657' title='Reset' onPress={() => { }} />
                        <Button color='#4ecf71' title='Confirm' onPress={() => { }} />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
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
    input: {
        width: 100,
        textAlign: 'center'

    }

});

export default StartGameScreen;