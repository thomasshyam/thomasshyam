import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class Red extends Component {
    
    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        width:100,
        height:100,
        backgroundColor:'green',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
