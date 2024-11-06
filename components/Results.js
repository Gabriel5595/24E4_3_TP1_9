import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Result = ({ result }) => {
    return (
        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    resultContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        alignItems: 'center',
    },
    resultText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Result;
