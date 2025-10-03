import { FC, useEffect, useRef } from "react";
import {
    Modal,
    View,
    Text,
    StyleSheet,
    Pressable,
    Animated,
    Easing,
    SafeAreaView,
    Platform,
    AccessibilityInfo,
} from "react-native";
import { Button } from "../button/Button";
import { IConfirmModal } from "./confirmModal.interface";
import { styles } from "./confirmModal.style";

export const ConfirmModal: FC<IConfirmModal> = ({
    visible,
    title = "Подтвердите действие",
    message = "Вы уверены, что хотите продолжить?",
    confirmText = "Подтвердить",
    cancelText = "Отмена",
    onConfirm,
    onCancel,
    loading = false,
    confirmStyle = "default",
    dismissOnBackdropPress = true,
}) => {
    const backdrop = useRef(new Animated.Value(0)).current;
    const sheet = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(backdrop, {
                    toValue: 1,
                    duration: 180,
                    easing: Easing.out(Easing.quad),
                    useNativeDriver: true,
                }),
                Animated.spring(sheet, {
                    toValue: 1,
                    damping: 18,
                    stiffness: 180,
                    mass: 0.6,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                if (Platform.OS !== "web") {
                    AccessibilityInfo.announceForAccessibility?.(title);
                }
            });
        } else {
            Animated.parallel([
                Animated.timing(backdrop, {
                    toValue: 0,
                    duration: 160,
                    easing: Easing.in(Easing.quad),
                    useNativeDriver: true,
                }),
                Animated.timing(sheet, {
                    toValue: 0,
                    duration: 160,
                    easing: Easing.inOut(Easing.quad),
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visible, backdrop, sheet, title]);

    const translateY = sheet.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 0],
    });

    const backdropStyle = {
        opacity: backdrop.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),
    };

    const handleBackdropPress = () => {
        if (!dismissOnBackdropPress || loading) return;
        onCancel();
    };

    return (
        <Modal
            animationType="none"
            transparent
            visible={visible}
            onRequestClose={() => {
                if (!loading) onCancel();
            }}
            statusBarTranslucent
            presentationStyle="overFullScreen"
            accessibilityViewIsModal
        >
            <SafeAreaView style={styles.safeArea} pointerEvents="box-none">
                <Animated.View
                    style={[styles.backdrop, backdropStyle]}
                    pointerEvents={visible ? "auto" : "none"}
                >
                    <Pressable
                        style={StyleSheet.absoluteFill}
                        onPress={handleBackdropPress}
                    />
                </Animated.View>

                <Animated.View
                    style={[styles.card, { transform: [{ translateY }] }]}
                    accessible
                    accessibilityRole="alert"
                >
                    {!!title && <Text style={styles.title}>{title}</Text>}
                    {!!message && <Text style={styles.message}>{message}</Text>}

                    <View style={styles.actions}>
                        <Button
                            style={styles.btn}
                            btnStyle="outline"
                            size="small"
                            onPress={onCancel}
                        >
                            {cancelText}
                        </Button>
                        <Button
                            style={styles.btn}
                            btnStyle={confirmStyle}
                            size="small"
                            onPress={onConfirm}
                        >
                            {loading ? "Подождите…" : confirmText}
                        </Button>
                    </View>
                </Animated.View>
            </SafeAreaView>
        </Modal>
    );
};
