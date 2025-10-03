import { loginUser } from "@/bff/api";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { transformUser } from "@/bff/transformers";

export const authorize = async (email: string, password: string) => {
    const { token, message } = await loginUser(email, password);

    if (!token || message) {
        return { res: null, error: message || "Ошибка при авторизации" };
    }

    const user = transformUser(jwtDecode(token));

    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("user", JSON.stringify(user));

    return {
        res: {
            user,
            token,
        },
        error: null,
    };
};
