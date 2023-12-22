import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
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
        //backgroundColor: "red", 
        backgroundColor: "transparent", 
        width: "100%", 
        height: "70%", 
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
        borderWidth: 1,
        backgroundColor: "white",
        height: "100%", 
        marginRight: 20,
        marginLeft: -20,
        justifyContent: "center",
    },
    image: {
        width: 375,
        height: 375,
        marginLeft: -10,
        height: "50%",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginLeft: 10,
    },
    text: {
        textAlign: "center",
        fontSize: 50,
    },
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
    },
    tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
    tabText: (activeJobType, item) => ({
        fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
});  

export default styles;