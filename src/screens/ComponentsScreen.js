import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name = 'Ahmad';
    return <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.greetingStyle}>My name is {name}!</Text>
        </View>
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45,
        color: "white",
        backgroundColor: "#ff23dc"
    },
    greetingStyle:{
        fontSize:20,
        color: "blue"
    }
});

export default ComponentsScreen;