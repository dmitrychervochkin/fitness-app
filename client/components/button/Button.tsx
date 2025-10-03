import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { IButton } from "./button.interface";
import { COLORS } from "@/constants";

export const Button: FC<IButton> = ({
    children,
    style,
    size = "medium",
    btnStyle = "default",
    textStyle,
    onPress,
    ...props
}) => {
    return (
        <Pressable
            onPress={onPress}
            {...props}
            style={({ pressed }) => [
                style,
                styles.container,
                styles[btnStyle],
                styles[size],
                pressed && styles[`${btnStyle}Pressed`],
            ]}
        >
            {({ pressed }) => (
                <Text
                    style={[
                        styles.title,
                        textStyle,
                        pressed && styles.titlePressed,
                    ]}
                >
                    {children}
                </Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: "600",
    },
    titlePressed: {
        opacity: 0.8,
    },

    medium: {
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    small: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    default: {
        backgroundColor: COLORS.gray03,
    },
    defaultPressed: {
        backgroundColor: COLORS.gray04,
    },

    danger: {
        backgroundColor: COLORS.error,
    },
    dangerPressed: {
        backgroundColor: COLORS.errorDark,
    },

    primary: {
        backgroundColor: COLORS.primary,
    },
    primaryPressed: {
        backgroundColor: COLORS.primaryDark,
    },

    outline: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: COLORS.gray03,
    },
    outlinePressed: {
        borderColor: COLORS.gray04,
    },
});
