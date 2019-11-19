import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return (<TextInput  {...props} style={{ ...styles.input, ...props.style }} />

    );
};

const styles = StyleSheet.create({
    input: {
        height: 20,
        borderBottomColor: 'brown',
        borderBottomWidth: 1,
        marginVertical: 50

    }
});

export default Input;