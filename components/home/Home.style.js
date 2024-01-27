import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    searchContainer: {
        flexDirection: "row",
        height:50,
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
        width: 50,
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
        backgroundColor: "red", 
        width: "100%", 
        height: "100%", 
        paddingTop: 20,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    cardWrapper: {   
        backgroundColor: '#4FD0E9',
        //width: "100%",
        height: "100%",
        width: 350,
        //height: 450,
        justifyContent: "center",
        alignItems: "center",
        //paddingTop: 20,
    },
    card: {
        width: 350,
        height: 450,
        //flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 20,
        //borderWidth: 2,
        backgroundColor: "white",
        marginLeft: -20,
        ...SHADOWS.medium,
        shadowColor: COLORS.black,
    },
    cards: {
        width: 350,
        height: 450,
        //flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 20,
        //borderWidth: 2,
        backgroundColor: "white",
    },
    image: {
        width: 375,
        height: "55%",
        marginTop: 10,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        width: "100%",
        height: "75%",
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modalTitle: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: FONT.medium,
        marginTop: 10,
        paddingBottom: -30,
    },
    scrollViewContent: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
});  

export default styles;