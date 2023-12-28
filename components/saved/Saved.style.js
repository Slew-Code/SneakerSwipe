import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xLarge,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: COLORS.primary,
    },
    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.gray,
    },
    cardsContainer: {
        //flex: 1,
        marginTop: SIZES.small,
        padding: SIZES.xSmall, 
        borderRadius: SIZES.small,
        //backgroundColor: "#FFF",
        ...SHADOWS.small,
        shadowColor: COLORS.gray1,
    },
});

export default styles;