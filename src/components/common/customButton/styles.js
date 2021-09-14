import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
   
    wrapper: {
        height:42,
        paddingHorizontal:5,
        marginVertical:5,
        justifyContent:"space-evenly",
        alignItems:"center",
        borderRadius:10,
        
        
    },
    inputContainer: {
        paddingVertical: 12,
    },
    button:{
        fontSize:18,
        fontWeight:"bold",
        
    },
    loaderSection:{
        flexDirection:"row"
    }
});
