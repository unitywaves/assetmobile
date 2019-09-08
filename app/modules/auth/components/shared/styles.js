import React from 'react';
import { StyleSheet } from 'react-native';

export const Fonts = {bold: "HelveticaNeue-Bold", medium: "HelveticaNeue-Medium", regular: "Helvetica Neue"};
export const Colors = {primary: '#63E2EA', secondary: '#e89a63', white: '#F1F2F2', grey: '#D0D5DA'};

const center = {
    justifyContent: "center",
    alignItems: "center"
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    //BUTTON
    containerView: {
        marginTop: 20,
        marginBottom: 10,
        shadowColor: "transparent",
        backgroundColor: "transparent",
        borderRadius: 27,
        borderWidth: 1.5,
        borderColor: Colors.white,
        height: 54
    },

    button: {
        flex:1,
        ...center
    },

    buttonText: {
        fontSize: 15,
        letterSpacing: 0.5,
        fontFamily: Fonts.medium,
        color: Colors.white,
    },

    //HEADER
    headerContainer:{
        marginBottom: 25,
    },

    headerText:{
        fontSize: 30,
        fontFamily: Fonts.bold,
        letterSpacing: 1,
        color: Colors.white,
        paddingBottom: 10
    },

    //FOOTER
    footer: {
        flexDirection: "row",
        marginTop: 20,
        ...center
    },

    footerText: {
        fontSize: 14,
        fontFamily: Fonts.medium,
        marginRight: 5,
        color: Colors.white
    },

    footerCTA: {
        fontSize: 14,
        color: Colors.white,
        fontFamily: Fonts.medium,
    }
});

export default styles;