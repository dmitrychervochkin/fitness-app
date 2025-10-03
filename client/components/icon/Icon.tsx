import { FC } from "react";
import { Pressable } from "react-native";
import { IIconButton } from "./icon.interface";
import { COLORS } from "@/constants";

export const Icon: FC<IIconButton> = ({
    Icon: IconBtn,
    size = 35,
    color = COLORS.text,
    activeColor = COLORS.gray05,
    ...props
}) => {
    return (
        <Pressable {...props}>
            {({ pressed }) => (
                <IconBtn size={size} color={pressed ? activeColor : color} />
            )}
        </Pressable>
    );
};
