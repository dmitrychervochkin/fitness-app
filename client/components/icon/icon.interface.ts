import { PressableProps } from "react-native";

export type IconCmp = React.ComponentType<{ color?: string; size?: number }>;

export interface IIconButton extends PressableProps {
    Icon: IconCmp;
    size?: number;
    color?: string;
    activeColor?: string;
}
