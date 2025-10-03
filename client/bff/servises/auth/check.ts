import { checkUser } from "@/bff/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export const check = async () => {
    const userToken = await AsyncStorage.getItem("token");

    if (!userToken) {
        return { res: null, error: "Нет токена" };
    }

    const { token, message } = await checkUser(userToken);

    if (!token || message) {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user");
        return { res: null, error: message || "Токен недействителен" };
    }

    const user = jwtDecode(token);
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("user", JSON.stringify(user));

    return { res: { token, user }, error: null };
};
