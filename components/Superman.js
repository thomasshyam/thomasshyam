import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class superman extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>I am shyam </Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
