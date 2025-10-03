import { FC, useState } from "react";
import { View, Text, SafeAreaView, Modal } from "react-native";
import { styles } from "./profileHeader.style";
import { TextButton } from "../button/TextButton";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectLogin } from "@/slices/authSlice/authSlice";
import { LogOut, Settings } from "lucide-react-native";
import { Icon } from "../icon/Icon";
import { COLORS } from "@/constants";
import { ConfirmModal } from "../confirmModal/ConfirmModal";

interface IProfileHeader {}

export const ProfileHeader: FC<IProfileHeader> = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
            <SafeAreaView style={styles.header}>
                <View style={styles.container}>
                    <Text style={styles.headerTitle}>Профиль</Text>
                    <View style={styles.actions}>
                        <Icon Icon={Settings} size={28} color={COLORS.gray04} />
                        <Icon
                            Icon={LogOut}
                            size={28}
                            color={COLORS.gray04}
                            onPress={() => setIsOpenModal(true)}
                        />
                    </View>
                </View>
            </SafeAreaView>

            <ConfirmModal
                visible={isOpenModal}
                title="Выход"
                message="Вы хотите выйти из аккаунта?"
                confirmText="Выйти"
                cancelText="Отмена"
                confirmStyle="danger"
                loading={isLoading}
                dismissOnBackdropPress={true}
                onCancel={() => setIsOpenModal(false)}
                onConfirm={async () => {
                    try {
                        setIsLoading(true);
                        dispatch(logout());
                        setIsOpenModal(false);
                    } finally {
                        setIsLoading(false);
                    }
                }}
            />
        </>
    );
};
