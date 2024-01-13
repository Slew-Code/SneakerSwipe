import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants/theme";

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
        //backgroundColor: "transparent", 
        width: "100%", 
        height: "70%", 
        padding: 20,
    },
    cardWrapper: {   
        //backgroundColor: '#4FD0E9',
        borderRadius: SIZES.small,
        width: "100%",
        height: "100%",
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        //borderWidth: 2,
        backgroundColor: "white",
        height: "100%", 
        marginRight: 20,
        marginLeft: -20,
        ...SHADOWS.medium,
        shadowColor: COLORS.black,
    },
    image: {
        width: 375,
        //marginLeft: -10,
        marginTop: -25,
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
    tabsContainer: {
        width: "100%",    
        //backgroundColor: "red", 
        marginTop: SIZES.small,
        paddingBottom: SIZES.small,
        marginLeft: 10, //replace with a way to center the content 
        //justifyContent: "center",
        //alignItems: "center",
    },
    tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        //paddingHorizontal: SIZES.small,
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
});  

export default styles;