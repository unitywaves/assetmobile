import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import * as c from "../constants";
import * as api from '../api'

import { Loading, EmptyError, ListItem } from '../components/shared'

const emptyMessage = "There are no data to show...";

export default function Home(props) {
    const dispatch = useDispatch();

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    //Access Redux Store State
    const homeReducer = useSelector((state) => state.homeReducer);
    const { data } = homeReducer;

    //==================================================================================================

    //2 - MAIN CODE BEGINS HERE
    useEffect(() => getData(), []);

    //==================================================================================================

    //3 - GET FLATLIST DATA
    const getData = () => {
        setIsFetching(true);

        api.getData()
            .then((result) => {
                let users = result.data;
                dispatch({type: c.DATA_AVAILABLE, data:{users}})
            })
            .catch((error) => setError(error))
            .finally(() => setIsFetching(false))
    };

    //==================================================================================================

    //4 - RENDER FLATLIST ITEM
    const renderItem = ({item, index}) => {
        return <ListItem item={item} index={index}/>;
    };

    //==================================================================================================

    //5 - RENDER
    if (isFetching) return <Loading/>;
    else if (error !== null) return <EmptyError message={error} onPress={getData}/>;
    else
        return (
            <FlatList
                style={{backgroundColor: '#ffffff'}}
                contentContainerStyle={{}}
                data={data}
                extraData={data}
                initialNumToRender={5}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString() + '_users'}
                ListEmptyComponent={<EmptyError message={emptyMessage} onPress={getData}/>}/>
        );
};


Home.navigationOptions = screenProps => ({
    title: "Users"
});