import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}  >
            <Text style={styles.headerTitle} >{props.title}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 50,
        backgroundColor: '#6a256e',
        alignItems: 'center',
        
    },
    headerTitle: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 25
    }
});

export default Header;