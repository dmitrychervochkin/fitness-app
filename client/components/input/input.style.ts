import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    input: {
        color: COLORS.text,
    },
    eyeButton: {
        position: "absolute",
        right: 15,
        top: "50%",
        transform: [{ translateY: -12 }],
        backgroundColor: COLORS.gray03,
    },
    medium: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 16,
        backgroundColor: COLORS.gray03,
    },
    small: {
        backgroundColor: COLORS.gray02,
        borderRadius: 7,
        paddingHorizontal: 10,
        paddingVertical: 7,
        width: 90,
        textAlign: "center",
    },
});
