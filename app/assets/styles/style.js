import { StyleSheet, Dimensions } from 'react-native'

const WIDTH= Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;

const styles = StyleSheet.create({
    loginContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 50,
        backgroundColor: "#283C53",
    },
    loginTitle:{
        paddingVertical: 50,
    },
    loginText:{
        fontSize: HEIGHT * 0.045,
        fontFamily: 'BabyGentha',
        color: "lightgray",
    },
    input:{
        width: "100%",
        borderRadius: 5,
        borderColor: "#2D4860",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: WIDTH*0.07,
        paddingLeft: 20,
    },
    inputFont:{
        color: "#fff",
    },
    forgotPass:{
        fontSize: HEIGHT * 0.015,
        color: "lightgray",
    },
    boxBtn:{
        width: "100%",
        paddingVertical: 20,
    },
    btnLogin:{
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#53BBD0",
        padding: 20,
    },
    textBtnLogin:{
        color: "#fff",
    },
    btnSingUp:{
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#53BBD0",
        padding: 20,
    },
})

export default styles;