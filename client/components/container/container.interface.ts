import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface IContainer {
    style?: StyleProp<ViewStyle>;
    children: ReactNode;
}
