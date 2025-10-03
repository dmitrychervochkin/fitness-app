import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    miniHeader: {
        position: "absolute",
        alignItems: "center",
        width: "100%",
        zIndex: 10,
        backgroundColor: COLORS.gray02,

        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10,
    },
    miniHeaderText: {
        fontSize: 20,
        color: COLORS.text,
        fontWeight: "600",
        paddingBottom: 10,
    },
});
