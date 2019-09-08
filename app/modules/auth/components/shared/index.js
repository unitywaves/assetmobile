import React from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View,
    Keyboard
} from 'react-native';
import styles, {Colors, Fonts} from './styles'

export {Fonts, Colors};

//Main Container
export const Container = ({children, containerStyle}) => {
    return (
        <KeyboardAvoidingView behavior="padding" style={[styles.container, containerStyle]}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
};

Container.defaultProps = {
    containerStyle: {}
};


//AUTH BUTTON
export const AuthButton = ({title, onPress, containerStyle, buttonStyle, textStyle, loading}) => {

    let TouchableComponent = Platform.select({
        android: TouchableNativeFeedback,
        default: TouchableOpacity,
    });

    return (
        <View style={[styles.containerView, buttonStyle]}>
            <TouchableComponent onPress={onPress} activeOpacity={0.3} style={[styles.button]} disabled={loading}>
                {
                    !loading ?
                        <Text style={[styles.buttonText, textStyle]}>
                            {title}
                        </Text>
                        :
                        <ActivityIndicator animating={true}/>
                }
            </TouchableComponent>
        </View>
    )
};

AuthButton.defaultProps = {
    containerStyle: {},
    buttonStyle: {},
    textStyle: {},
    loading: false
};

//Top Container
export const Header = ({title, text}) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
};

Header.defaultProps = {
    containerStyle: {}
};

//FOOTER
export const Footer = ({title, cta, onPress, textStyle, ctaStyle}) => {
    return (
        <View style={styles.footer}>
            <Text style={[styles.footerText, textStyle]}>
                {title}
            </Text>

            <TouchableOpacity onPress={onPress}>
                <Text style={[styles.footerCTA, ctaStyle]}>
                    {cta}
                </Text>
            </TouchableOpacity>
        </View>
    )
};

Footer.defaultProps = {
    textStyle: {},
    ctaStyle: {},
};