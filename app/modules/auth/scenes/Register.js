import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from "react-redux";
import {TextField} from 'react-native-material-textfield';

import { register } from "../api";
import { setToken } from "../utils";

import {AuthButton, Container, Header} from "../components/shared";

import styles from "./styles";

const testUser = {name: "Moses Esan", role: "Developer"};

export default function Register(props) {
    const dispatch = useDispatch();

    const {navigation} = props;
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState({email: "", password: "", confirmPassword: ""});
    const [errorMsg, setErrorMsg] = useState("");

    function onRegister() {
        setLoading(true);

        let data = {email, password};
        register(data)
            .then((data) => setToken(data.token, testUser, dispatch))
            .then(() => navigation.navigate('App'))
            .catch((error) => setErrorMsg(error))
            .finally(() => setLoading(false));
    };

    function onValidate() {
        let success = true;
        let error = {email: "", password: ""};

        //Validate Email
        if (!email || 0 === email.length) {
            error["email"] = 'Your email address is required';
            success = false;
        }

        //Validate Password
        if (!password || 0 === password.length) {
            error["password"] = 'Your password is required';
            success = false;
        }else if (password.length < 6){
            error[password] = 'Password must be at least 6 characters';
        }

        //Validate Confirm Password
        if (!confirmPassword || 0 === confirmPassword.length) {
            error["confirmPassword"] = 'Your password is required';
            success = false;
        }else if(confirmPassword !== password){
            error["confirmPassword"] =  'Password does not match.';
            success = false;
        }

        setError(error);

        if (success) onRegister();
    }

    return (
        <Container containerStyle={styles.container}>
            <View style={[styles.formContainer]}>
                <Header title={"Register"} text={`Enter your information to create a new account.`}/>

                {errorMsg.length > 0 && <Text style={styles.errorStyle}>{errorMsg}</Text>}

                <View style={styles.containerStyle}>
                    <TextField
                        label='Email Address'
                        value={email}
                        error={error["email"]}
                        textColor={"#F1F2F2"}
                        tintColor={"#F1F2F2"}
                        baseColor={"#F1F2F2"}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.containerStyle}>
                    <TextField
                        label='Password'
                        value={password}
                        error={error["password"]}
                        textColor={"#F1F2F2"}
                        tintColor={"#F1F2F2"}
                        baseColor={"#F1F2F2"}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.containerStyle}>
                    <TextField
                        label='Confirm Password'
                        value={confirmPassword}
                        error={error["confirmPassword"]}
                        textColor={"#F1F2F2"}
                        tintColor={"#F1F2F2"}
                        baseColor={"#F1F2F2"}
                        onChangeText={(text) => setConfirmPassword(text)}
                        secureTextEntry={true}
                    />
                </View>

                <AuthButton title={"Register"} onPress={onValidate} loading={loading}/>
            </View>
        </Container>
    );
};