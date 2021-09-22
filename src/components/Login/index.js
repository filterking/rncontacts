import { useNavigation } from '@react-navigation/core';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Container from "../../components/common/container/index";
import CustomButton from "../../components/common/customButton";
import Input from "../../components/common/Input/index";
import Register from '../../screens/auth/Register';
import styles from './styles';


const LoginComponent = () => {
    const {navigate} = useNavigation();
    return (
        <Container>
            <Image height={200} width={200} source={require('../../assets/images/General/logo_white.png')} style={styles.logoImage} />
        <View>
        
        <Text>Welcome to RNContacts</Text>
        <Input 
        label="Username"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        placeholder="Username"
        ></Input>

        <Input 
        label="Password"
        icon={<Text>Show</Text>}
        iconPosition="right"
        placeholder="Password"
        secureTextEntry={true}
        ></Input>

        <CustomButton primary title="Login"></CustomButton>
        </View>
        <View>
            <TouchableOpacity onPress={
                () => {
                    navigate(Register);
                }
            }><Text>Go to Register</Text></TouchableOpacity>
        </View>
    </Container>
    );

}


export default LoginComponent;