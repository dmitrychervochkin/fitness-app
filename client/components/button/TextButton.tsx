import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { IButton } from "./button.interface";
import { COLORS } from "@/constants";
import { View } from "lucide-react-native";

export const TextButton: FC<IButton> = ({
    children,
    textStyle,
    onPress,
    ...props
}) => {
    return (
        <Pressable onPress={onPress} {...props}>
            {({ pressed }) => (
                <Text
                    style={[
                        styles.title,
                        pressed && styles.titlePressed,
                        textStyle,
                    ]}
                >
                    {children}
                </Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    title: {
        width: "100%",
        color: COLORS.gray04,
        fontSize: 16,
        fontWeight: "600",
    },
    titlePressed: {
        color: COLORS.gray05,
    },
});
