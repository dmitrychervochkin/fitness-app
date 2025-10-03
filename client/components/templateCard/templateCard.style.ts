import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: COLORS.gray03,
        padding: 15,
        justifyContent: "space-between",
        minWidth: "48%",
        maxWidth: "48%",
        flexGrow: 1,
        minHeight: 150,
    },
    top: {
        gap: 10,
    },
    title: {
        fontSize: 15,
        color: COLORS.text,
        fontWeight: 600,
        maxWidth: 120,
    },
    description: {
        fontSize: 15,
        color: COLORS.gray05,
        marginBottom: 10,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    exercisesCount: {
        fontSize: 15,
        color: COLORS.gray04,
    },
    popoverItem: {
        fontSize: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    popovertext: {
        fontSize: 15,
        color: COLORS.text,
        fontWeight: 600,
    },
});
