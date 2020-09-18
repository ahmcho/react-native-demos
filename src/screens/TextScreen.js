import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return <View>
        <Text>Enter Password: </Text>
        <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}    
        />
        { password.length < 4 ? <Text style={styles.error}>Password must be longer than 5 characters.</Text> : null}
    </View>
};

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth: 1
    },
    error:{
        color:"red"
    }
})

export default TextScreen;