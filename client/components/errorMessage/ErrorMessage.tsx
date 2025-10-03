import { COLORS } from "@/constants";
import { FC, useEffect, useRef } from "react";
import {
    Animated,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";

interface IErrorMessage {
    error: string;
    setError: (error: string) => void;
}

export const ErrorMessage: FC<IErrorMessage> = ({ error, setError }) => {
    const slideAnim = useRef(new Animated.Value(-100)).current; // изначально скрыт за верхом

    useEffect(() => {
        if (error) {
            // Плавно опускаем сверху
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();

            const timer = setTimeout(() => {
                // Плавно поднимаем обратно
                Animated.timing(slideAnim, {
                    toValue: -100,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => setError(""));
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    if (!error) return null;

    return (
        <SafeAreaView style={styles.safeArea}>
                <Animated.View
                    style={[
                        styles.container,
                        { transform: [{ translateY: slideAnim }] },
                    ]}
                >
                    <Text style={styles.text}>{error}</Text>
                </Animated.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        position: "absolute",
        top: 0,
        left: 20,
        right: 20,
        zIndex: 1000,
        alignItems: "center",
    },
    container: {
        marginTop: 10,
        backgroundColor: COLORS.error,
        padding: 20,
        borderRadius: 10,
        minWidth: "80%",
        alignItems: "center",
    },
    text: {
        color: COLORS.text,
        fontWeight: "600",
        textAlign: "center",
    },
});
