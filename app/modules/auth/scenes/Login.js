import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from "react-redux";
import {TextField} from 'react-native-material-textfield';

import {login} from "../api";
import {setToken} from "../utils";

import {AuthButton, Container, Header, Footer} from "../components/shared";

import styles from "./styles";

const testUser = {name: "Krispy", role: "Developer"};

export default function Login(props) {
  const dispatch = useDispatch();

  const {navigation} = props;
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({email: "", password: ""});
  const [errorMsg, setErrorMsg] = useState("");

  function onLogin() {
    setLoading(true);

    let data = {email, password};
    login(data)
      .then((data) =>
        setToken(data.headers['access-token'], data.data, dispatch),
      )
      .then(() => navigation.navigate('App'))
      .catch((error) => setErrorMsg(error))
      .finally(() => setLoading(false));
  }

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
        }

        setError(error);

        if (success) onLogin();
    }

    return (
        <Container containerStyle={styles.container}>

            <View style={[styles.formContainer]}>
                <Header title={"Login"}/>

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

                <AuthButton title={"Login"} onPress={onValidate} loading={loading}/>

                <Footer title={"Don't have an account?"} cta={"Register"} onPress={() => navigation.navigate('Register')}
                        ctaStyle={{color: "#F90B1B"}}/>
            </View>
        </Container>
    );
};