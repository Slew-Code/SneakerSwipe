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
        shadowColor: COLORS.white,
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
        marginHorizontal: SIZES.medium,
    },
    shoeName: {
        fontSize: SIZES.medium,
        fontFamily: "DMBold",
    },
    shoeType: {
        fontSize: SIZES.small + 2,
        fontFamily: "DMRegular",
        color: COLORS.gray,
        marginTop: 3,
        textTransform: "capitalize",
    },
});

export default styles;