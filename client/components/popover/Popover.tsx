import { FC } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./popover.style";
import { IPopover } from "./popover.interface";

export const Popover: FC<IPopover> = ({
    children,
    isModalOpen,
    setIsModalOpen,
    iconLayout,
}) => {
    return (
        <Modal
            isVisible={isModalOpen}
            onBackdropPress={() => setIsModalOpen(false)}
            onBackButtonPress={() => setIsModalOpen(false)}
            backdropOpacity={0.2}
            animationIn="fadeIn"
            animationOut="fadeOut"
            style={{ margin: 0 }}
        >
            {iconLayout && (
                <View
                    style={[
                        styles.popover,
                        {
                            top: iconLayout.y,
                            left: iconLayout.x - 145,
                        },
                    ]}
                >
                    {children}
                </View>
            )}
        </Modal>
    );
};
