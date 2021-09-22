import { useNavigation } from '@react-navigation/core';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Container from "../../components/common/container/index";
import CustomButton from "../../components/common/customButton";
import Input from "../../components/common/Input/index";
import Login from '../../screens/auth/Login';
import styles from './styles';


const SignUpComponent = ({onSubmit,onChange,form,errors}) => {
    const {navigate} = useNavigation();
    return (
        <Container>
           
        <View>
        
        <Text>SignUp Component</Text>
        <Input 
        label="Username"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        placeholder="Username"
        onChangeText={(value)=>{
            onChange({name:"userName",value:value});
        }}
        error={errors.userName}
        ></Input>

<Input 
        label="Firstname"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        placeholder="Firstname"
        onChangeText={(value)=>{
            onChange({name:"firstName",value:value});
        }}
        error={errors.firstName}
        ></Input>

<Input 
        label="Lastname"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        placeholder="Lastname"
        onChangeText={(value)=>{
            onChange({name:"lastName",value:value});
        }}
        error={errors.lastName}
        ></Input>

<Input 
        label="Email"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        placeholder="Email"
        onChangeText={(value)=>{
            onChange({name:"email",value:value});
        }}
        error={errors.email}
        ></Input>

<Input 
        label="Password"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(value)=>{
            onChange({name:"password",value:value});
        }}
        error={errors.password}
        ></Input>

        <CustomButton primary title="Sign Up" onPress={onSubmit}></CustomButton>
        </View>
        <View>
            <TouchableOpacity onPress={
                () => {
                    navigate(Login);
                }
            }><Text>Go to Login</Text></TouchableOpacity>
        </View>
    </Container>
    );

}


export default SignUpComponent;