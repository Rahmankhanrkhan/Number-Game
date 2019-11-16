import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const inputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) ||  chosenNumber > 99 || chosenNumber === 0  ) {
            return;
        };
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Text> Chosen Number : {selectedNumber} </Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}
        >
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
                        placeholder = 'Enter between 0 and 100..'
                        onChangeText={inputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer} >
                        <Button color='#c74657' title='Reset' onPress={resetHandler} />
                        <Button color='#4ecf71' title='Confirm' onPress={confirmHandler} />
                    </View>
                </Card>
                {confirmedOutput}
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
        width: 200,
        textAlign: 'center'

    }

});

export default StartGameScreen;