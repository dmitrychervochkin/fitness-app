import { COLORS } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        padding: 5,
    },
    cell: {
        justifyContent: "center",
        alignItems: "center",
    },
    center: {
        color: COLORS.text,
        textAlign: "center",
    },
    set: {
        fontSize: 15,
        fontWeight: 600,
        borderRadius: 5,
    },
    iconCell: {
        alignItems: "center",
        justifyContent: "center",
    },
    durationContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    },
    durationLine: {
        position: "absolute",
        height: 4,
    },
    durationTimeline: {
        backgroundColor: COLORS.primary,
        zIndex: 2,
        left: 0,
    },
    durationTimelineBack: {
        width: "100%",
        backgroundColor: COLORS.gray04,
        zIndex: 1,
    },
    durationTimeText: {
        color: COLORS.text,
        fontWeight: 600,
        zIndex: 3,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 5,
        textAlign: "center",
        minWidth: 60,
    },
});
