import { ReactNode } from "react";
import { LayoutRectangle } from "react-native";

export interface IPopover {
    children: ReactNode;
    isModalOpen: boolean;
    setIsModalOpen: (p: boolean) => void;
    iconLayout: LayoutRectangle | null;
}
