import { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Loader } from "@/components";
import { COLORS } from "@/constants";
import { useDispatch } from "react-redux";
import { login, logout } from "@/slices/authSlice/authSlice";

import { server } from "@/bff";
import { useNavigate } from "@/hooks";

export default function SplashScreen() {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async () => {
            const result = await server.check();

            const { res, error } = result || {
                res: null,
                error: "Нет ответа от сервера",
            };

            if (!res || error) {
                dispatch(logout());
                navigation.replace("Quiz");
                return;
            }
            dispatch(
                login({
                    token: res.token,
                    role: res.user.role,
                    login: res.user.login,
                    email: res.user.email,
                    createdAt: res.user.createdAt,
                    id: res.user.id,
                    exp: res.user.exp,
                    iat: res.user.iat,
                })
            );

            navigation.replace("Tabs");
        };

        const timer = setTimeout(() => {
            fetchUserData();
        }, 2000);

        return () => clearTimeout(timer);
    }, [dispatch, navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/mamont.png")}
                style={{
                    width: 200,
                    height: 200,
                    resizeMode: "contain",
                }}
            />
            <Loader flex={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray01,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
});
