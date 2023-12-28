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
        //backgroundColor: '#4FD0E9',
        borderRadius: SIZES.small,
        width: "100%",
        height: "100%",
    },
    card: {
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: "white",
        height: "100%", 
        marginRight: 20,
        marginLeft: -20,
        justifyContent: "flex-start", // Align items from the start (top of the card)
    },
    image: {
        width: 375,
        height: 100,
        marginLeft: -10,
        marginTop: 20,
        height: "50%",
    },
    cardDescription: {
        textAlign: "center",
        fontSize: 14,
        marginLeft: 10,
        fontFamily: FONT.medium,
    },
    cardTitle: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: FONT.medium,
        marginBottom: 15,
    },
    buyButton: {
        width: "50%",
        alignSelf: 'center', // Center horizontally in middle
        alignItems: 'center', //align text within button in middle
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,      
    },
    buyButtonText: {
        color: 'white',
        fontWeight: 'bold',
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