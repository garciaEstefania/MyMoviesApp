import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../common/colors';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 50,
        backgroundColor: colors.primary,
    },
    loginTitle: {
        paddingVertical: 50,
    },
    loginText: {
        fontSize: HEIGHT * 0.045,
        fontFamily: 'BabyGentha',
        color: "lightgray",
    },
    input: {
        width: "100%",
        borderRadius: 5,
        borderColor: "#2D4860",
        borderWidth: 2,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: WIDTH * 0.07,
        paddingLeft: 20,
        flexDirection: 'row'
    },
    inputFont: {
        color: "#fff",
    },
    forgotPass: {
        fontSize: HEIGHT * 0.015,
        color: "lightgray",
    },
    boxBtn: {
        width: "100%",
        paddingVertical: 10,
    },
    btnLogin: {
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: colors.secondary,
        padding: 20,
    },
    textBtnLogin: {
        color: "#fff",
    },
    btnSingUp: {
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.secondary,
        padding: 20,
    },
})

export default styles;