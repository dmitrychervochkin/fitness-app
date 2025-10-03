import { COLORS } from "@/constants";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.gray02,
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    headerContainer: {
        padding: 20,
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerTitle: {
        fontSize: 25,
        color: COLORS.text,
        fontWeight: "600",
    },
    progress: {
        position: "absolute",
        left: 20,
        width: width - 40,
        backgroundColor: COLORS.gray03,
        padding: 20,
        borderRadius: 10,
        gap: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    progressWeeks: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dayContainer: {
        position: "relative",
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
    },
    day: {
        fontWeight: "700",
    },
    progressHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerCompleted: {
        color: COLORS.primary,
        fontSize: 20,
        fontWeight: "600",
    },
    progressTitle: {
        color: COLORS.text,
        fontSize: 20,
        fontWeight: "600",
    },
    todayDot: {
        position: "absolute",
        backgroundColor: "white",
        width: 5,
        height: 5,
        borderRadius: "50%",
        bottom: -14,
    },
});
