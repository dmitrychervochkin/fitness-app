import { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface IButton {
    children: ReactNode;
    size?: "medium" | "small";
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    btnStyle?: "default" | "outline" | "primary" | "danger";
    textStyle?: TextStyle;
    onPress?: () => void;
}
