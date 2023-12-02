import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    header: {
        textAlign: "center",
        paddingHorizontal: SIZES.medium,
        marginTop: SIZES.small,
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height:50,
        paddingHorizontal: SIZES.medium,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
    },
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    cardContainer: {
        backgroundColor: "red", 
        width: "100%", 
        height: "80%", 
        marginTop: 30, 
        padding: 20,
    },
    cardWrapper: {   
        backgroundColor: '#4FD0E9',
        borderRadius: SIZES.small,
        width: "100%",
        height: "100%",
    },
    card: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        backgroundColor: "white",
        height: "100%", 
        marginRight: 20,
        marginLeft: -20,
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 50,
    }
});  

export default styles;