import React from "react";
import { Text, TextInput, View } from 'react-native';
import Container from "../../components/common/container";
import CustomButton from "../../components/common/customButton";
import Input from "../../components/common/Input";

const Login = () => {
    const [value, myTextStateChange]=React.useState('');
    const [passw, myPaswStateChange]=React.useState('');
    
    return (
        <Container>
            <View>
            <Text>Login Sayfası</Text>
            <Input 
            label="Username"
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            onChangeText={text=>myTextStateChange(text)}
            value={value}
           error={"This Field is Error"}
            ></Input>

            <Input 
            label="Password"
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            
            onChangeText={text=>myPaswStateChange(text)}
            value={passw}
           
            ></Input>

            <CustomButton secondary title="Login" loading={false} disabled={false}></CustomButton>
            </View>
        </Container>
    );
};

export default Login;