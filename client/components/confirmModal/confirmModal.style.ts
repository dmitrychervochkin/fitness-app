import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.45)",
    },
    card: {
        width: "88%",
        maxWidth: 420,
        borderRadius: 16,
        paddingHorizontal: 18,
        paddingVertical: 16,
        backgroundColor: COLORS.gray02,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: COLORS.text,
        marginBottom: 6,
    },
    message: {
        fontSize: 15,
        color: COLORS.gray05,
        marginBottom: 16,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
    },
    btn: {
        minWidth: 110,
    },
});
