import { FC } from "react";
import { View } from "react-native";
import { styles } from "./container.style";
import { IContainer } from "./container.interface";

export const Container: FC<IContainer> = ({ children, style }) => {
    return <View style={[styles.container, style]}>{children}</View>;
};
