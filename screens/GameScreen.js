import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNumBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomNumBetween(min, max, exclude);
    }
    else {
        return rndNum;
    };
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumBetween(1, 100, props.userChoice)
    );

    const currentLow = useRef(1); 
    const currentHigh = useRef(100);


    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)
        ) {
            Alert.alert("Don't lie", "Truth needed",
                [{ text: 'Sorry', style: 'cancel' }]
            );
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;

        }
        const nextNumber = generateRandomNumBetween(
            currentLow.current,
            currentHigh.current, 
            currentGuess
        );
        setCurrentGuess(nextNumber);
    };



    return (
        <View style={styles.screen} >
            <Text> Opponent's Guess </Text>
            <NumberContainer>  {currentGuess} </NumberContainer>
            <Card style={styles.buttonContainer} >
                <Button title='Lower' onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title='Greater' onPress={nextGuessHandler.bind(this, 'greater')} />
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;