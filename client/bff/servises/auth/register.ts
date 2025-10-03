import { registerUser } from "@/bff/api";
import { transformUser } from "@/bff/transformers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export const register = async (
    login: string,
    email: string,
    password: string
) => {
    const { token, message } = await registerUser(login, email, password);

    if (!token || message) {
        return { res: null, error: message || "Ошибка регистрации" };
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
