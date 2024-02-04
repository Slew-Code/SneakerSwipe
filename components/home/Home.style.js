import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    searchContainer: {
        flexDirection: "row",
        height:40,
        paddingHorizontal: SIZES.medium,
        marginTop: SIZES.xSmall,   
    },
    searchInput: {
        flex: 1,
        backgroundColor: COLORS.white,
        fontFamily: FONT.regular, 
        paddingHorizontal: SIZES.medium,
        marginRight: SIZES.small,
        borderRadius: SIZES.medium,
        ...SHADOWS.small,
        shadowColor: COLORS.black,
    },
    searchBtn: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        ...SHADOWS.medium,
        shadowColor: COLORS.black,
    },
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.xSmall, 
        paddingLeft: "5%", //replace with a way to center the content 
    },
    tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small / 2,
        borderRadius: SIZES.xSmall,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
        width: "30%",
        marginRight: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }),
    tabText: (activeJobType, item) => ({
        fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
    cardContainer: {
        //backgroundColor: "red", 
        //width: "100%", 
        //height: Dimensions.get('window').height * 0.6, 
        paddingTop: 20,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    cardWrapper: {   
        //backgroundColor: '#4FD0E9',
        //width: "100%",
        //height: Dimensions.get('window').height * 0.55,
        width: 350,
        justifyContent: "center",
        alignItems: "center",
        //paddingTop: 20,
    },
    card: {
        width: 350,
        height: Dimensions.get('window').height * 0.575,
        //justifyContent: "flex-start",
        //alignItems: "center",
        borderRadius: 20,
        //borderWidth: 2,
        //backgroundColor: "white",
        marginLeft: -20,
        //...SHADOWS.medium,
        //shadowColor: COLORS.black,
    },
    cards: {
        width: 350,
        height: Dimensions.get('window').height * 0.575,
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "white",
        ...SHADOWS.medium,
        shadowColor: COLORS.black,
    },
    image: {
        width: 375,
        height: "58%",
        marginTop: 10,
        marginBottom: -20,
    },
    cardTitle: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: FONT.medium,
        marginBottom: 5,
    },
    cardDescription: {
        textAlign: "center",
        fontSize: 14,
        fontFamily: FONT.medium,
    },
    buyButton: {
        flex: 1,
        alignSelf: 'stretch', // Stretch button to fill available space horizontally
        justifyContent: 'center', // Center text vertically within the button
        backgroundColor: 'green',
        paddingVertical: 12, // Adjust vertical padding for height
        paddingHorizontal: 10, // Adjust horizontal padding
        borderRadius: 5,
        marginHorizontal: 5, // Add horizontal margin between buttons
        marginBottom: 10, // Add margin at the bottom
    },
    buttonContainer: {
        //position: 'absolute',
        //bottom: 20, // Position the container at the bottom
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    modalContainer: {
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: "80%",
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modalTitle: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: FONT.medium,
        paddingBottom: -30,
    },
    modalDescription: {
        textAlign: "center",
        //fontSize: 24,
        fontFamily: FONT.medium,
        marginTop: 10,
        marginHorizontal: 15,
    },
    modalLogoContainer: {
        width: 300,
        height: 300,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    modalLogoImage: {
        width: "100%",
        height: "100%",
    },
    scrollViewContent: {
        flex: 1,
        //justifyContent: 'flex-start',
        alignItems: 'center',
    },
});  

export default styles;