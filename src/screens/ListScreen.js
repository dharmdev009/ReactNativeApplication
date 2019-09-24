import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
    {name : 'Friend1', age: '5' },
    {name : 'Friend2', age: '5' },
    {name : 'Friend3', age: '5'  },
    {name : 'Friend4', age: '5'  },
    {name : 'Friend5', age: '5'  },
    {name : 'Friend6', age: '5'  },
    {name : 'Friend7', age: '5'  },
    {name : 'Friend8', age: '5'  },
    {name : 'Friend9', age: '5'  }];    
    return  (
    <FlatList     
    keyExtractor = {friend => friend.name}
    data={friends} 
    renderItem={({item}) => {
        return (
            <Text style = {styles.textStyle} > {item.name} - {item.age} </Text> 
            );
        
    }}/>
    );

}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical:50
    }
});

export default ListScreen;