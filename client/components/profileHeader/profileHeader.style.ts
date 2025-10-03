import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.gray02,
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    container: {
        padding: 20,
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    headerTitle: {
        fontWeight: "600",
        fontSize: 25,
        color: COLORS.text,
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        gap: 25,
    },
});
