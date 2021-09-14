import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Input = ({onChangeText,style,value,label,icon,iconPosition,error,...props}) => {
 
    return (
        <View style={styles.inputContainer}>
          {label &&  <Text>{label}</Text>}
          <View style={styles.wrapper}>
          <View>{icon && icon}</View>
            <TextInput style={[styles.textInput, style]} onChangeText={onChangeText} value={value} {...props} ></TextInput>
        </View>

    </View>
    );

}

export default Input;
