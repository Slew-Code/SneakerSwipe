import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.black,
        marginBottom: 10,
    },
    logoContainer: {
        width: 100,
        height: 100,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    logoImage: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        flex: 1,
        flexDirection:"row",
        marginHorizontal: SIZES.medium,
        alignItems:"center",
        justifyContent: 'space-between', // Add this line to adjust spacing between text and delete button

    },
    shoeName: {
        fontSize: SIZES.medium,
        fontFamily: "DMBold",
    },   
    deleteBtn: {   
        width: 50,
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",    
    },
    shoeType: {
        fontSize: SIZES.small + 2,
        fontFamily: "DMRegular",
        color: COLORS.gray,
        marginTop: 3,
        textTransform: "capitalize",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: "90%",
        height: "75%",
        backgroundColor: 'white',
        borderRadius: 10,
    },
    scrollViewContent: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 375,
        //marginLeft: -10,
        marginTop: -25,
        height: "50%",
    },

});

export default styles;