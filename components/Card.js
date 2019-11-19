import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'red',
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 100 },
        shadowRadius: 20,
        elevation: 10,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;