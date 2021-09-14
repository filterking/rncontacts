import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    textInput:{
        borderWidth:0,
       flex:1,
      
    },
    wrapper: {
        height:42,
        borderColor: colors.grey,
        borderWidth:1,
        borderRadius:4,
        flexDirection:"row",
        paddingHorizontal:5,
        alignItems:'center'
    },
    inputContainer: {
        paddingVertical: 12,
    }
});
