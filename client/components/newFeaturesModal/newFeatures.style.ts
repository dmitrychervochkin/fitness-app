import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal: {
        margin: 0,
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#00000010",
    },
    window: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: 0,
        backgroundColor: COLORS.gray02,
        gap: 30,
        padding: 30,
        paddingTop: 15,
        paddingBottom: 50,
        alignItems: "center",
    },
    headerTitle: {
        textAlign: "center",
        fontSize: 30,
        color: COLORS.text,
        fontWeight: 600,
    },
    featureCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    featureText: {
        flex: 1,
        flexShrink: 1,
    },

    title: {
        color: COLORS.text,
        fontWeight: "600",
        marginBottom: 4,
    },

    description: {
        color: COLORS.gray04,
        flexShrink: 1,
    },
    featuresList: {
        gap: 20,
        width: "100%",
    },
    line: {
        backgroundColor: COLORS.gray04,
        height: 5,
        width: 100,
    },
});
