import React, { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import SignUpComponent from "../../components/SignUp";
import envs from "../../config/env";
import axiosInstance from "../../helpers/axiosInterceptor";

const Register = () => {
    const [form,setForm] = useState({});
    const [errors,setErrors] = useState({});
  
    useEffect(()=>{
        axiosInstance.get("/contacts").catch(err=>{
            console.log(err);
            
        });
    },[]);
    const onChange = ({name,value}) => {
        setForm({...form, [name]:value});

        if(value!==''){
            setErrors((prev)=>{
                return {...prev,[name]:null};
            });
        }else{
            setErrors((prev)=>{
                return {...prev,[name]:'Thiis Field is Required'};
            });
        }
    }

    const onSubmit = () => {
        //validations
        console.log(form);
        if(!form.userName){
            setErrors(prev=>{
                return {...prev,userName:"Lütfen Kullanıcı Adını Giriniz"};
            });
        }
        if(!form.firstName){
            setErrors(prev=>{
                return {...prev,firstName:"Lütfen Adınızı Giriniz"};
            });
        }
        if(!form.lastName){
            setErrors(prev=>{
                return {...prev,lastName:"Lütfen SoyAdınızı Giriniz"};
            });
        }
        if(!form.email){
            setErrors(prev=>{
                return {...prev,email:"Lütfen Email Giriniz"};
            });
        }
        if(!form.password){
            setErrors(prev=>{
                return {...prev,password:"Lütfen Parola Giriniz"};
            });
        }
    }
    return (
       
       <SignUpComponent onSubmit={onSubmit} onChange={onChange} form={form} errors={errors} />
    );
};

export default Register;