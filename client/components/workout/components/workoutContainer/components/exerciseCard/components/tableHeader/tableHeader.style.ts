import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
    },
    cell: {
        justifyContent: "center",
        color: COLORS.gray04,
    },
    center: {
        textAlign: "center",
    },
    iconCell: {
        alignItems: "center",
        justifyContent: "center",
    },
});
