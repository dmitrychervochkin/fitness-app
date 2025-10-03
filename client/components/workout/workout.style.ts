import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // paddingHorizontal: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        gap: 20,
    },
    mainContainer: {
        paddingTop: 30,
        backgroundColor: COLORS.gray02,
    },
    hideContainer: {
        paddingTop: 25,
        position: "absolute",
        height: 150,
        bottom: 0,
        width: "100%",
        backgroundColor: COLORS.gray03,
    },
    hideTime: {
        textAlign: "center",
        color: COLORS.gray04,
        fontSize: 20,
    },
    mainTime: {
        position: "absolute",
        color: COLORS.primary,
        width: "100%",
        zIndex: 2,
        textAlign: "center",
        fontSize: 20,
    },
    title: {
        fontSize: 20,
    },
    line: {
        alignSelf: "center",
        position: "absolute",
        top: 10,
        width: 100,
        height: 5,
        borderRadius: 10,
        backgroundColor: COLORS.gray04,
    },
    headerActions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
    },
    header: {
        gap: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 600,
        color: COLORS.text,
        paddingHorizontal: 20,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 16,
        color: COLORS.gray04,
    },
});
