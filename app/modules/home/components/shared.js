
import React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Image} from 'react-native';

export const Loading = ({}) => {
    return (
        <View style={[styles.container]}>
            <ActivityIndicator animating={true} color={'grey'}/>
        </View>
    )
};

export const EmptyError = (props) => {
    return (
        <View style={[styles.container]}>
            <Text style={styles.message}>{props.message}</Text>
            {props.onPress && <Button onPress={props.onPress} title='Tap to refresh'/>}
        </View>
    )
};

export const ListItem = ({item, index}) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{uri:item.avatar}} style={styles.image}/>
            <View stle={styles.info}>
                <Text style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
                <Text style={styles.email}>{`${item.email}`}</Text>
            </View>
        </View>
    )
};

let center = {
    alignItems: 'center',
    justifyContent: 'center'
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        ...center
    },

    message: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 14,
        color: '#414141',
        textAlign: 'center',
        paddingVertical: 8
    },


    itemContainer: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E9E9E9',
        flexDirection:"row",
        alignItems: 'center'
    },

    info:{
        flex:1
    },

    image: {
        height: 60,
        width:  60,
        borderRadius: 60/2,
        marginRight: 8*1.5
    },

    name: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 16,
        color: '#414141'
    },

    email: {
        fontFamily: 'Helvetica Neue',
        fontSize: 14,
        color: '#414141'
    }
});