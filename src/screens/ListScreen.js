import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Shamxal', age: 26},
        { name: 'Togrul', age: 26},
        { name: 'Marcesia', age: 25},
        { name: 'Fidash', age: 27},
        { name: 'Turana', age: 32},
        { name: 'Conan O\'Brien', age: 64},
        { name: 'Keanu Reeves', age: 57},
        { name: 'Kəramət Böyükçöl', age: 2332},
        { name: 'Qənirə Paşayeva', age:69}
    ];
    return (
        <FlatList
            keyExtractor={(friend) => friend.name }
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }} 

        />)
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:60,
        alignSelf: 'stretch',
        textAlign: 'center',
    }
})

export default ListScreen;