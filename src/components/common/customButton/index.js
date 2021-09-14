import React, { Component } from 'react';
import { View, Text, TextInput, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({title,secondary,primary,danger,disabled,loading,onPress,...props}) => {
 
    const getBgColor = () => {
        if(disabled){
            return colors.grey;
        }
        if(primary){
            return colors.primary;
        }
        if(danger){
            return colors.danger;
        }
        if(secondary){
            return colors.secondary;
        }
    }
    return (
        <TouchableOpacity style={[styles.wrapper,{backgroundColor:getBgColor()}]} disabled={disabled} onPress={onPress}>
            <View style={[styles.loaderSection]}>
           {loading && <ActivityIndicator color={colors.grey} />}     
           
          {title &&  (<Text style={[styles.button,{ color:disabled?"black":"white" }]}>{title}</Text>)}
          
          </View>
    </TouchableOpacity>
    );

}

export default CustomButton;
