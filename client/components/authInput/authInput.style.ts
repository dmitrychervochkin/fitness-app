import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 10,
        position: "relative",
    },
    label: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: "600",
    },
    error: {
        position: "absolute",
        textAlign: "right",
        fontSize: 15,
        color: COLORS.error,
        top: 85,
        right: 0,
    },
});
