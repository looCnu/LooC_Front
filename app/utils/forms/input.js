import React from "react";
import {StyleSheet, TextInput} from "react-native";

const Input = props => {
    let template = null;
    switch (props.type) {
        case 'textInput':
           template = <TextInput {...props} style={styles.Input} />; 
           break;
        case 'textInputRevised':
            template = <TextInput {...props} style={styles.InputRevised} />;
            break;
        default:
            return template;
    }
    return template;
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        fontSize: 17,
        padding: 5,
        marginTop: 30,
    },
    InputRevised: {
        width: '100%',
        borderBottomWidth: 3,
        borderBottomColor: 'red',
        fontSize: 17,
        padding: 5,
        marginTop: 30,

    },
}); 

export default Input;

