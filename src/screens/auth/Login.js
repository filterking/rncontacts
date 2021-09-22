import React from "react";
import { Text, TextInput, View } from 'react-native';
import LoginComponent from "../../components/Login";

const Login = () => {
    const [value, myTextStateChange]=React.useState('');
    const [passw, myPaswStateChange]=React.useState('');
    
    return (
       <LoginComponent />
    );
};

export default Login;