import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray03,
        borderRadius: 20,
        alignItems: "flex-start",
        gap: 10,
        paddingBottom: 10,
        paddingTop: 15,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderBottomWidth: 1,
        borderColor: COLORS.gray04,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    setsContainer: {
        paddingHorizontal: 10,
        gap: 10,
        width: "100%",
    },
    exercise: {
        fontWeight: 600,
        color: COLORS.text,
        fontSize: 16,
    },
    addBtn: {
        borderColor: COLORS.gray04,
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 20,
    },
  

});
