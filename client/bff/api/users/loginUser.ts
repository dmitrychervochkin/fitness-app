export const loginUser = async (email: string, password: string) => {
    const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_URL;
    try {
        const response = await fetch(`${SERVER_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        return data;
    } catch (err) {
        console.log(err);
        return { message: "Ошибка при авторизации. Попробуйте позже." };
    }
};
