import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: COLORS.gray03,
        borderRadius: 10,
        padding: 10,
        gap: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 15,
        color: COLORS.text,
        fontWeight: 600,
    },
    notes: {
        fontSize: 15,
        color: COLORS.gray04,
    },
    notesContainer: {
        borderColor: COLORS.gray03,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 7,
    },
    date: {
        fontSize: 15,
        color: COLORS.gray05,
    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    iconsText: {
        fontSize: 15,
        color: COLORS.primary,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footerColumn: {
        flex: 1,
        gap: 5,
    },
    footerHeading: {
        fontSize: 15,
        color: COLORS.gray05,
    },
    footerItem: {
        fontSize: 15,
        color: COLORS.gray04,
    },

    modalContent: {
        backgroundColor: COLORS.gray01,
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
        color: COLORS.text,
    },
    modalDescription: {
        fontSize: 15,
        color: COLORS.gray05,
        textAlign: "center",
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    closeButtonText: {
        color: "#fff",
        fontWeight: "600",
    },

    popover: {
        backgroundColor: COLORS.gray03,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10,
        width: 200,
        position: "absolute",
        gap: 10,
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
