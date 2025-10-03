export const checkUser = async (token: string) => {
    const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_URL;
    try {
        const response = await fetch(`${SERVER_URL}/users/check`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json;charset=utf-8",
            },
        });

        const data = await response.json();

        return data;
    } catch (err) {
        return { message: "Ошибка при проверке токена. Попробуйте позже." };
    }
};
