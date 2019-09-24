import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
    const myname = 'dharm dev sharma';
    return (
        <View>
            <Text style = {styles.textStyle}> Getting started with react native</Text>
            <Text style = {styles.myStyle}> My name is {myname}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    myStyle : {
     fontSize: 20   
    }
});

export default ComponentScreen;