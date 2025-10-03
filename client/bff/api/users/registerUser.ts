export const registerUser = async (
    login: string,
    email: string,
    password: string
) => {
    const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_URL;
    try {
        const response = await fetch(`${SERVER_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ login, email, password }),
        });

        const data = await response.json();

        return data;
    } catch (err) {
        return { message: "Ошибка при регистрации. Попробуйте позже."}
    }
};
