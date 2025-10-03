import { FC } from "react";
import { View } from "react-native";
import { styles } from "./background.style";
import { IBackground } from "./background.interface";

export const Background: FC<IBackground> = ({ children, style }) => {
    return <View style={[styles.container, style]}>{children}</View>;
};
