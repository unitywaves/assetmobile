
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

export const windowWidth = Dimensions.get('window').width;

const WIDTH = windowWidth - 40;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#312E5B"
    },

    formContainer:{
        width:WIDTH,
        marginHorizontal: 20,
    },

    errorStyle: {
        color: 'red',
        fontSize: 14,
        fontFamily: "Helvetica Neue",
        marginVertical: 8
    },

    containerStyle: {
        marginBottom: 12,
    }
});

export default styles;